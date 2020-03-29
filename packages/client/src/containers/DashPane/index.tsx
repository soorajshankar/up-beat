import React from 'react';
import BarChart from '../../components/molecules/BarChart';
import Container from '../../components/molecules/Container';
import OverView from './Overview';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import moment from 'moment';

const GET_ANALYTICS = gql`
    query getAnalytics($input: String!, $from: DateTime!, $to: DateTime!) {
        getAnalytics(input: $input, from: $from, to: $to) {
            url
            status
            createdAt
            method
            rDuration
        }
    }
`;
const DashPane = () => {
    const [range, setRange] = React.useState([
        moment()
            .startOf('week')
            .toString(),
        moment()
            .endOf('day')
            .toString(),
    ]);
    const [from, to] = range;
    const { loading, error, data } = useQuery(GET_ANALYTICS, {
        variables: { input: '5e7776330848c84e31fd0d12', from, to },
    });
    return (
        <Container>
            <OverView />
            <BarChart {...{ data: data ? data.getAnalytics : [] }} />
            <BarChart />
            <BarChart />
            <BarChart />
            <BarChart />
            <BarChart />
        </Container>
    );
};

export default DashPane;
