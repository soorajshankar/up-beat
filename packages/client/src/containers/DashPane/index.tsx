import React from 'react';
import BarChart from '../../components/molecules/BarChart';
import Container from '../../components/molecules/Container';
import OverView from './Overview';

import { IUrl } from '../../typings';
import ResponseTimeChart from './ResponseTImeChart';
import { Row } from '../../components/molecules/Grid';
const DashPane = (props: IDashPaneProps) => {
    return (
        <Container>
            <OverView {...props} />
            <Row flow="wrap">
                <ResponseTimeChart {...props} />
            </Row>
        </Container>
    );
};
export interface IDashPaneProps {
    url?: IUrl;
}
export default DashPane;
