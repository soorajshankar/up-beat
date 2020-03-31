import React from 'react';
import BarChart from '../../components/molecules/BarChart';
import { IDashPaneProps } from '../DashPane';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import { GET_ANALYTICS } from '../../graphql/queries';
import { PlainCard } from '../../components/atoms/Card';
import { Column } from '../../components/molecules/Grid';

const ResponseTimeChart = (props: IDashPaneProps) => {
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
        variables: { input: props?.url?.id || '', from, to },
    });
    if (loading) return <>Loading..</>;
    if (error) return <>Oops something went wrong..</>;
    return (
        <PlainCard>
            <Column
                style={{
                    padding: '15px 28px',
                }}
            >
                <BarChart {...{ data: data?.getAnalytics || [] }} />;
            </Column>
        </PlainCard>
    );
};

export default ResponseTimeChart;
