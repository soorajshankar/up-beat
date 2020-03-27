import React from 'react';
import styled from 'styled-components';
import { H3 } from '../../components/atoms/Heading';
import List from '../../components/molecules/List';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { IThemed } from '../../contexts/Themes';
import { SearchInput } from '../../components/atoms/Inputs';

const SecondPane = styled.div<IThemed>`
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 375px;
    background-color: ${(props: IThemed) => props.theme.bg_card};
    box-shadow: 1px 1px 3px 1px #e0e0e0;
`;
const PaneHeder = styled.div`
    padding: 30px;
`;
const DomainsPane = () => {
    const { loading, error, data } = useQuery(GET_GREETING, {
        variables: { language: 'english' },
    });
    if (loading) return <p>Loading ...</p>;
    console.log(loading, error, data);

    return (
        <SecondPane>
            <PaneHeder>
                <H3>Domains</H3>
                <SearchInput />
            </PaneHeder>
            <List data={data.urls as Iurl[]} onClick={console.warn} />
        </SecondPane>
    );
};

const GET_GREETING = gql`
    query {
        urls {
            url
        }
    }
`;
export interface Iurl {
    readonly url: string;
    readonly method: string;
    readonly createdAt?: Date;
    readonly active?: boolean;
}
export default DomainsPane;
