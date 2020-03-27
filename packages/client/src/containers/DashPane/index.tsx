import React from 'react';
import BarChart from '../../components/molecules/BarChart';
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    flex-direction: 'row';
    height: 100%;
    overflow: auto;
`;

const DashPane = () => (
    <Grid>
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
    </Grid>
);

export default DashPane;
