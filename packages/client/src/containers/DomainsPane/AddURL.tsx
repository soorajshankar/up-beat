import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Modal,
} from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_URL } from '../../graphql/mutations';

interface IAddUrl {
    onClose?: () => void;
}

const urlRx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

const AddURL = (props: IAddUrl) => {
    const [url, setUrl] = useState('');
    const [addUrl, { data, loading }] = useMutation(CREATE_URL);
    const onUrlChange = React.useCallback(
        e => {
            setUrl(e.target.value);
        },
        [setUrl],
    );
    const onSubmit = React.useCallback(() => {
        if (url && url.match(urlRx)) addUrl({ variables: { url } });
    }, [url, addUrl]);

    React.useEffect(() => {
        if (data) {
            props.onClose && props.onClose();
        }
    }, [data]);
    return (
        <Modal
            title="Add Url"
            visible
            onCancel={props.onClose}
            footer={[
                <Button key="back" onClick={props.onClose}>
                    Return
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>
                    Submit
                </Button>,
            ]}
        >
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} layout="horizontal">
                <Form.Item label="URL">
                    <Input defaultValue="http://" value={url} onChange={onUrlChange} />
                </Form.Item>
                <Form.Item label="Select">
                    <Select defaultValue="GET">
                        <Select.Option value="GET">GET</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddURL;
