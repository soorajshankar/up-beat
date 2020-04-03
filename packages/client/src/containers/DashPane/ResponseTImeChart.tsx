import React, { SetStateAction } from 'react';
import BarChart from '../../components/molecules/BarChart';
import { IDashPaneProps } from '../DashPane';
import { useQuery } from '@apollo/react-hooks';
import moment, { Moment } from 'moment';
import { GET_ANALYTICS } from '../../graphql/queries';
import { PlainCard } from '../../components/atoms/Card';
import { Column, Row } from '../../components/molecules/Grid';
import { H3 } from '../../components/atoms/Heading';
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
const { RangePicker } = DatePicker;

type IRange = [Moment, Moment];

const ResponseTimeChart = (props: IDashPaneProps) => {
    const [range, setRange] = React.useState<SetStateAction<any>>([
        moment().startOf('week'),
        moment().endOf('day'),
    ]);
    const [from, to] = range;
    const { loading, error, data } = useQuery(GET_ANALYTICS, {
        variables: { input: props?.url?.id || '', from, to },
    });
    if (loading) return <>Loading..</>;
    if (error) return <>Oops something went wrong..</>;
    return (
        <>
            <Row style={{ width: '100%', padding: '20px 10px', alignItems: 'center' }}>
                <H3
                    style={{
                        padding: '0 10px 0 0',
                    }}
                >
                    Response Time
                </H3>
                <RangePicker value={range} onChange={setRange} />
            </Row>
            <PlainCard
                style={{
                    padding: '15px 28px',
                }}
            >
                <BarChart {...{ data: data?.getAnalytics || [] }} />
            </PlainCard>
        </>
    );
};

export default ResponseTimeChart;
