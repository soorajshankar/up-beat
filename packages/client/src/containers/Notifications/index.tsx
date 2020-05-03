import React from 'react';
import { Table, Tag } from 'antd';
import Container from '../../components/molecules/Container';

const Notifcations = () => (
    <Container>
        <h1>Notifcations</h1>
        <Table columns={columns} dataSource={data} />
    </Container>
);

export default Notifcations;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: any) => <a href="/">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Config',
        dataIndex: 'config',
        key: 'config',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status: string) => (
            <span>
                <Tag color={status === 'active' ? 'green' : 'red'}>{status}</Tag>
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record: object) => (
            <span>
                <a href="/" style={{ marginRight: 16 }}>
                    Invite
                </a>
                <a href="/">Delete</a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'SMTP Notifications',
        age: 32,
        config: `{SMTP_USER:'<user>@gmail.com',SMTP_PW:'alksfnflknaslkfn'}`,
        status: 'active',
    },
    {
        key: '2',
        name: 'Slack Notifications',
        age: 42,
        config: `{url:http://slack.com/<your hook>}`,
        status: 'stopped',
    },
    {
        key: '3',
        name: 'Telegram',
        age: 32,
        config: `{SMTP_USER:'<user>@gmail.com',SMTP_PW:'alksfnflknaslkfn'}`,
        status: 'active',
    },
];
