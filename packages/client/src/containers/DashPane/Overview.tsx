import React from 'react';
import { OPTIONS } from '../../static/constants';
import styled from 'styled-components';
import { IThemed } from '../../contexts/Themes';

import { Row, Column } from '../../components/molecules/Grid';
import { H3, H1, H2 } from '../../components/atoms/Heading';
import Select from '../../components/atoms/Select';

const OPTNS = OPTIONS.map(i => i.name);

const PlainCard = styled.div<IThemed>`
    background-color: ${(props: IThemed) => props.theme.bg_card};
    box-shadow: 1px 1px 3px 1px #e0e0e0;
    margin: 20px 10px;
    border-radius: 5px;
`;

const OverView = ({}) => {
    const didMountRef = React.useRef(false);
    React.useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    console.log('>>');
    return (
        <>
            <SubHead title="Overview" options={OPTNS} />
            <PlainCard>
                <Row style={{ justifyContent: 'space-between' }}>
                    <AnalyticsCard
                        title="Average Response Time"
                        value="100ms"
                        percent="+30%"
                        type="green"
                    />
                    <AnalyticsCard
                        title="Best response time"
                        value="80ms"
                        percent="-44%"
                        type="red"
                    />
                    <AnalyticsCard
                        title="Worst response time"
                        value="1000ms"
                        percent="+30%"
                        type="green"
                    />
                </Row>
            </PlainCard>
        </>
    );
};
const AnalyticsCard = ({ title = '', value = '', percent = '', type = 'healthy' }) => {
    return (
        <Column
            style={{
                padding: '15px 28px',
            }}
        >
            <Title>{title}</Title>
            <Value>{value}</Value>
            <Percent type="healthy">{percent}</Percent>
        </Column>
    );
};
const Title = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
`;
const Value = styled.span`
    margin: 10px 0px;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 40px;
`;
interface IPercent {
    type?: string;
}
const Percent = styled.span<IPercent>`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
    letter-spacing: 1px;
    color: ${props => {
        if (props.type === 'healthy') return '#219653';
        if (props.type === 'unhealthy') return '#EB5757';
        if (props.type === 'warn') return 'yellow';
        return 'grey';
    }};
`;

interface ISubHead {
    title?: string;
    options?: string[];
}

const SubHead = (props: ISubHead) => {
    const { title = '', options = [] } = props;
    return (
        <Row style={{ alignItems: 'center', padding: '20px 10px' }}>
            <H3 style={{ margin: 0 }}>{title}</H3>
            <Select onChange={e => console.log(OPTIONS[Number(e.target.value)])}>
                {options &&
                    options instanceof Array &&
                    options.map((i, ix) => <option value={ix}>{i}</option>)}
            </Select>
        </Row>
    );
};

export default OverView;
