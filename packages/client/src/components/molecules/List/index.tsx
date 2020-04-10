import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IThemed } from '../../../contexts/Themes';

interface ILi {
    active?: boolean;
}

const LI = styled.li<IThemed & ILi>`
    line-height: 30px;
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

export interface IListProps<T> {
    data?: T[];
    onClick?: (v: T) => void;
}

const List: ListI = ({ data = [], onClick }) => {
    const [active, setActive] = useState(0);
    const didMountRef = useRef(false);
    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            //did mount here
            return;
        }
        onClick && data && onClick(data[active]);
    }, [active, onClick]);
    useEffect(() => {
        onClick && data && onClick(data[0]);
    }, [data]);
    return (
        <UL>
            {data &&
                data instanceof Array &&
                data.map((i, key) => (
                    <LI
                        active={key == active}
                        onClick={() => setActive(key)}
                        tabIndex={key}
                        {...{ key }}
                    >
                        <a>{i.url || ''}</a>
                    </LI>
                ))}
        </UL>
    );
};

type ListI<T = any> = React.FC<IListProps<T>>;

export default React.memo(List);
