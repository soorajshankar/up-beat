import React from 'react';
import { OPTIONS } from '../../static/constants';
import styled from 'styled-components';

import { Row, Column } from '../../components/molecules/Grid';
import { H3 } from '../../components/atoms/Heading';
import Select from '../../components/atoms/Select';
import { PlainCard } from '../../components/atoms/Card';
import { GET_OVERVIEW } from '../../graphql/queries';
import { IUrl, IOverviewDTO } from '../../typings';
import { useQuery } from '@apollo/react-hooks';

const OPTNS = OPTIONS.map(i => i.name);
export interface IOverView {
    url?: IUrl;
}
interface IOverViewObj {
    [key: string]: IOverviewDTO;
}
const parseData = (data: IOverviewDTO[] = []) => {
    const res: IOverViewObj = {};
    data &&
        data instanceof Array &&
        data.forEach((i: IOverviewDTO) => {
            res[i.type] = {
                type: String(i.value) || '',
                value: i.value || 0,
                prev: i.prev || 0,
            };
        });
    return res;
};

const getType = (percent: number, invert: boolean) => {
    const colors = ['green', 'red', 'blue', 'grey'];
    if (percent === 100) return colors[2];
    if (percent === 0) return colors[3];

    const positive = percent > 100;

    if (positive) {
        if (!invert) return colors[0];
        else return colors[1];
    } else {
        if (!invert) return colors[1];
        else return colors[0];
    }
};
const getPercentString = (percent: number) => {
    if (percent == 0) return '0%';
    return (percent > 100 ? '+' + (percent - 100) : '-' + percent) + '%';
};
const getAnltcProps = (
    metric: IOverviewDTO,
    invert: boolean = false,
    suffix: string | null = 'ms',
) => {
    const cur: number = Number.parseInt(metric.value + '');
    const prev: number = Number.parseInt(metric.prev + '');
    const percent = Math.floor(cur * (prev / 100));
    const type = getType(percent, invert);
    return {
        value: metric.value + (suffix || ''),
        percent: getPercentString(percent),
        type,
    };
};

const OverView = (props: IOverView) => {
    const didMountRef = React.useRef(false);
    const [type, setType] = React.useState('this week');
    React.useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);
    const { loading, error, data } = useQuery(GET_OVERVIEW, {
        variables: { url: props?.url?.id || '', type },
    });
    if (loading) return <>Loading..</>;
    if (error) return <>Oops something went wrong..</>;
    const { totalRTime, bestRTime, worstRTime, count } = parseData(data.getOverview);
    return (
        <>
            <SubHead title="Overview" options={OPTNS} type={type} onChange={setType} />
            <PlainCard>
                <Row style={{ justifyContent: 'space-around', flexFlow: 'wrap' }}>
                    <AnalyticsCard title="Total hits" {...getAnltcProps(count, false, null)} />
                    <AnalyticsCard
                        title="Average Response Time"
                        value="100ms"
                        percent="+30%"
                        type="green"
                    />
                    <AnalyticsCard title="Best response time" {...getAnltcProps(bestRTime)} />
                    <AnalyticsCard
                        title="Worst response time"
                        {...getAnltcProps(worstRTime, true)}
                    />
                </Row>
            </PlainCard>
        </>
    );
};
const AnalyticsCard = ({ title = '', value = '', percent = '', type = 'green' }) => {
    return (
        <Row>
            <Column
                style={{
                    padding: '15px 28px',
                    textAlign: 'center',
                }}
            >
                <Title>{title}</Title>
                <Value>{value}</Value>
                <Percent {...{ type }}>{percent}</Percent>
            </Column>
        </Row>
    );
};
const Title = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 33px;
`;
const Value = styled.span`
    margin: 10px 0px;
    font-style: normal;
    font-weight: 100;
    font-size: 40px;
    line-height: 40px;
`;
interface IPercent {
    type?: string;
}
const Percent = styled.span<IPercent>`
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 33px;
    letter-spacing: 1px;
    color: ${props => {
        if (props.type === 'green') return '#219653';
        if (props.type === 'red') return '#EB5757';
        if (props.type === 'warn') return 'yellow';
        return 'grey';
    }};
`;

interface ISubHead {
    title?: string;
    type?: string;
    options?: string[];
    onChange?: (v: string) => void;
}

const SubHead = (props: ISubHead) => {
    // tslint:disable-next-line: no-console
    const { title = '', options = [], onChange = console.warn, type = 'this week' } = props;
    return (
        <Row style={{ alignItems: 'center', padding: '20px 10px' }}>
            <H3 style={{ margin: 0 }}>{title}</H3>
            <Select onChange={e => onChange(e.target.value)} value={type}>
                {options &&
                    options instanceof Array &&
                    options.map((i, ix) => <option {...{ value: i, key: ix }}>{i}</option>)}
            </Select>
        </Row>
    );
};

export default OverView;
