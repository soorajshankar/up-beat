import React from 'react';
import BarChart from '../../components/molecules/BarChart';
import Container from '../../components/molecules/Container';
import OverView from './Overview';

const DashPane = () => (
    <Container>
        <OverView />
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
    </Container>
);

export default DashPane;
