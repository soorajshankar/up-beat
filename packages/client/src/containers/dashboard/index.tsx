import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../components/molecules/Sidebar';
import { Header } from '../../components/molecules/Header';
import { IThemed } from '../../contexts/Themes';
const DashboardDiv = styled.div`
    display: flex;
    height: 100%;
    background-color: ${(props: IThemed) => props.theme.bg};
`;
const RightPane = styled.div<IThemed>`
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;
const Content = styled.div<IThemed>`
    height: 100%;
    padding: 25px 80px;
`;
export const Dashboard = () => {
    return (
        <DashboardDiv>
            <Sidebar />
            <RightPane>
                <Header />
                <Content>Test</Content>
            </RightPane>
        </DashboardDiv>
    );
};
