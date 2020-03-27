import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../components/molecules/Sidebar';
import { IThemed } from '../../contexts/Themes';
import DomainsPane from '../DomainsPane';
import DashPane from '../DashPane';

const DashboardDiv = styled.div`
    display: flex;
    height: 100%;
    background-color: ${(props: IThemed) => props.theme.bg};
`;
const RightPane = styled.div<IThemed>`
    height: 100%;
    flex-grow: 1;
    display: flex;
`;
export const Dashboard = () => {
    return (
        <DashboardDiv>
            <Sidebar />
            <RightPane>
                <DomainsPane />
                <DashPane />
            </RightPane>
        </DashboardDiv>
    );
};
