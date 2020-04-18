import * as moment from 'moment';
import { Analytics } from '../analytics/interfaces/analytics.interface';
import { IOverview } from '../analytics/interfaces/overview.interface';

export const getDateRange = (type: string) => {
    // if (type.toLowerCase() === 'this week') {
    return {
        from: moment().startOf('week'),
        to: moment().endOf('week'),
        compareFrom: moment()
            .subtract(1, 'weeks')
            .startOf('week'),
        compareTo: moment()
            .subtract(1, 'weeks')
            .endOf('week'),
    };
    // }
};

export const genTimedQuery = (from?: string | moment.Moment, to?: string | moment.Moment) =>
    from &&
    to && {
        createdAt: {
            $gte: moment(from).startOf('day'),
            $lt: moment(to).endOf('day'),
        },
    };

export const getOverview = (current: Analytics[], compare: Analytics[]) => {
    const res: IOverview[] = [];
    const currentO = parseOverView(current);
    const compareO = parseOverView(compare);
    Object.keys(defaultParams).forEach(type => {
        res.push({
            type,
            value: currentO[type] || 0,
            prev: compareO[type] || 0,
        } as IOverview);
    });
    return res;
};
const parseOverView = (list: Analytics[]) => {
    const acc = {
        count: 0,
        healthy: 0,
        unhealthy: 0,
        totalRTime: 0,
        avgUptime: 0,
        bestRTime: 0,
        worstRTime: 0,
    };
    list.forEach(i => {
        acc.count++;

        acc.totalRTime += i.rDuration;

        // set healthy and unhealthy
        if (Number(i.status) > 199 && Number(i.status) < 300) acc.healthy++;
        else acc.unhealthy++;

        // set best Time
        if (acc.bestRTime === 0 && i.rDuration) acc.bestRTime = i.rDuration;
        if (i.rDuration < acc.bestRTime) acc.bestRTime = i.rDuration;

        // set worst Time
        if (acc.worstRTime === 0 && i.rDuration) acc.worstRTime = i.rDuration;
        if (i.rDuration > acc.worstRTime) acc.worstRTime = i.rDuration;
        return acc;
    });
    return acc;
};
const defaultParams = {
    count: 0,
    healthy: 0,
    unhealthy: 0,
    totalRTime: 0,
    avgUptime: 0,
    bestRTime: 0,
    worstRTime: 0,
};
const getPercent = (cur: number, com: number) => Math.floor(cur * (10 / com));
