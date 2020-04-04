import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { H3 } from '../../components/atoms/Heading';
import List from '../../components/molecules/List';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { IThemed } from '../../contexts/Themes';
import { SearchInput } from '../../components/atoms/Inputs';
import { IUrl } from '../../typings';
import Button from '../../components/atoms/Button';
import { Row } from '../../components/molecules/Grid';
import AddURL from './AddURL';

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
    display: flex;
    flex-direction: column;
    padding: 30px;
`;
const DomainsPane = (props: IDomainsProp) => {
    const [addUrl, setAddUrl] = useState(false);
    const { loading, error, data, refetch } = useQuery(GET_DOMAINS, {});
    const toggleAddUrl = useCallback(() => {
        setAddUrl(url => !url);
    }, [addUrl]);
    const onModalClose = React.useCallback(() => {
        setAddUrl(false);
        refetch();
    }, [setAddUrl, refetch]);

    return (
        <SecondPane>
            <PaneHeder>
                <Row>
                    <H3 style={{ flex: 1 }}>Domains</H3>
                    <Button
                        style={{
                            alignSelf: 'baseline',
                        }}
                        onClick={toggleAddUrl}
                    >
                        +
                    </Button>
                </Row>
                <SearchInput />
            </PaneHeder>
            {loading ? (
                <p>Loading</p>
            ) : error ? (
                <p>Failed to load the data...</p>
            ) : (
                <List data={data.urls as IUrl[]} onClick={props.setUrl} />
            )}
            {addUrl && <AddURL onClose={onModalClose} />}
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
