import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../components/molecules/Sidebar';
import { Header } from '../../components/molecules/Header';
import { IThemed } from '../../contexts/Themes';
import { H3 } from '../../components/atoms/Heading';
import { SearchInput } from '../../components/atoms/Inputs';
import { List } from '../../components/molecules/List';
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
const SecondPane = styled.div<IThemed>`
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 375px;
    background-color: ${(props: IThemed) => props.theme.bg_card};
    box-shadow: 1px 1px 3px 1px #e0e0e0;
`;
const PaneHeder = styled.div`
    padding: 30px;
`;
export const Dashboard = () => {
    return (
        <DashboardDiv>
            <Sidebar />
            <RightPane>
                <SecondPane>
                    <PaneHeder>
                        <H3>Domains</H3>
                        <SearchInput />
                    </PaneHeder>
                    <List />
                </SecondPane>
            </RightPane>
        </DashboardDiv>
    );
};
