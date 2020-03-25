import React from 'react';
import styled from 'styled-components';
import { IThemed } from '../../../contexts/Themes';

interface ILi {
    active?: boolean;
}

const LI = styled.li<IThemed & ILi>`
    line-height: 60px;
    padding: 10px;
    background-color: ${props => props.active && props.theme.bg_select};
    cursor: pointer;
    &:hover {
        background-color: ${props => (props.active ? props.theme.bg_select : props.theme.bg_hover)};
    }
`;
const UL = styled.ul`
    list-style-type: none;
    padding: 0px;
    overflow: auto;
`;

const testData = Array.from({ length: 10 }).map((_, i) => 'TEST :' + i);

export const List = () => {
    const [active, setActive] = React.useState(2);
    return (
        <UL>
            {testData.map((i, ix) => (
                <LI active={ix == active} onClick={() => setActive(ix)}>
                    {i}
                </LI>
            ))}
        </UL>
    );
};
