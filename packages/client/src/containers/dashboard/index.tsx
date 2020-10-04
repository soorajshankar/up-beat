import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../components/molecules/Sidebar';
import { IThemed } from '../../contexts/Themes';
import DomainsPane from '../DomainsPane';
import DashPane from '../DashPane';
import { IUrl } from '../../typings';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import Notifcations from '../Notifications';
const DashboardDiv = styled.div`
    display: flex;
    height: 100%;
    background-color: ${(props: IThemed) => props.theme.bg};
    font-family: 'Lato', sans-serif;
`;
const RightPane = styled.div<IThemed>`
    height: 100%;
    flex-grow: 1;
    display: flex;
`;
export const Dashboard = () => {
    const [url, setUrl] = React.useState({} as IUrl);
    React.useEffect(() => {
        // axios.post('auth/login', { username: 'john', password: 'changeme' });
    }, []);

    return (
        <DashboardDiv>
            <Sidebar />
            <RightPane>
                <Switch>
                    <Route path="/notifications">
                        <Notifcations />
                    </Route>
                    <Route path="/">
                        <DomainsPane {...{ setUrl }} />
                        <DashPane {...{ url }} />
                    </Route>
                </Switch>
            </RightPane>
        </DashboardDiv>
    );
};

