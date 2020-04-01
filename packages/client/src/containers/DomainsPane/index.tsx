import React from 'react';
import styled from 'styled-components';
import { H3 } from '../../components/atoms/Heading';
import List from '../../components/molecules/List';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { IThemed } from '../../contexts/Themes';
import { SearchInput } from '../../components/atoms/Inputs';
import { IUrl } from '../../typings';

const SecondPane = styled.div<IThemed>`
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 250px;
    background-color: ${(props: IThemed) => props.theme.bg_card};
    box-shadow: 1px 1px 3px 1px #e0e0e0;
`;
const PaneHeder = styled.div`
    padding: 30px;
`;
const DomainsPane = (props: IDomainsProp) => {
    const { loading, error, data } = useQuery(GET_DOMAINS, {});

    return (
        <SecondPane>
            <PaneHeder>
                <H3>Domains</H3>
                <SearchInput />
            </PaneHeder>
            {loading ? (
                <p>Loading</p>
            ) : error ? (
                <p>Failed to load the data...</p>
            ) : (
                <List data={data.urls as IUrl[]} onClick={props.setUrl} />
            )}
        </SecondPane>
    );
};

const GET_DOMAINS = gql`
    query {
        urls {
            url
            id
        }
    }
`;

export interface IDomainsProp {
    setUrl: (p: IUrl) => void;
}
export default DomainsPane;
