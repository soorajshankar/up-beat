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

const urlRx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const AddURL = (props: IAddUrl) => {
    const [url, setUrl] = useState('http://');
    const [valid, setValid] = useState(true);
    const [addUrl, { data, loading }] = useMutation(CREATE_URL);
    const onUrlChange = React.useCallback(
        e => {
            setUrl(e.target.value);
        },
        [setUrl],
    );
    const onSubmit = React.useCallback(() => {
        const valid = url && url.match(urlRx);
        if (!valid) return setValid(false);
        else addUrl({ variables: { url } });
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
                <Form.Item
                    label="URL"
                    {...{
                        ...(!valid && {
                            validateStatus: 'error',
                            help: 'Please enter a valid http or htttps url',
                        }),
                    }}
                >
                    <Input value={url} onChange={onUrlChange} />
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
