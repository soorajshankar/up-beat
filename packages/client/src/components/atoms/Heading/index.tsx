import React from 'react';

import styled from 'styled-components';
import { IThemed } from '../../../contexts/Themes';

const HType = {
    primary: 'primary',
    sec: 'secondary',
};

interface IH {
    type?: string;
}
const getColor = (p: IThemed & IH) => {
    if (p.type && p.type === HType.primary) return p.theme.txt_primary;
    if (p.type && p.type === HType.sec) return p.theme.txt_sec;
    return 'inherit';
};

export const H1 = styled.h1<IThemed & IH>`
    color: ${props => getColor(props)};
`;
export const H2 = styled.h2<IThemed & IH>`
    color: ${props => getColor(props)};
`;
export const H3 = styled.h3<IThemed & IH>`
    color: ${props => getColor(props)};
`;
export const H4 = styled.h4<IThemed & IH>`
    color: ${props => getColor(props)};
`;
export const H5 = styled.h5<IThemed & IH>`
    color: ${props => getColor(props)};
`;
export const H6 = styled.h6<IThemed & IH>`
    color: ${props => getColor(props)};
`;
