import React from 'react';
import BarChart from '../../components/molecules/BarChart';
import Container from '../../components/molecules/Container';
import OverView from './Overview';

import { IUrl } from '../../typings';
import ResponseTimeChart from './ResponseTImeChart';
const DashPane = (props: IDashPaneProps) => {
    return (
        <Container>
            <OverView />
            <ResponseTimeChart {...props} />
        </Container>
    );
};
export interface IDashPaneProps {
    url?: IUrl;
}
export default DashPane;
