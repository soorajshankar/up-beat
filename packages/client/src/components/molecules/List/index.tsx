import React, { SFC } from 'react';
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

export interface IListProps<T> {
    data?: T[];
    onClick?: (v: T) => void;
}

const List: ListI = ({ data = [], onClick }) => {
    const [active, setActive] = React.useState(2);
    const didMountRef = React.useRef(false);
    React.useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            //did mount here
            return;
        }
        onClick && data && onClick(data[active]);
    }, [active, onClick]);
    return (
        <UL>
            {data &&
                data instanceof Array &&
                data.map((i, ix) => (
                    <LI active={ix == active} onClick={() => setActive(ix)} tabIndex={ix}>
                        <a>{i.url || ''}</a>
                    </LI>
                ))}
        </UL>
    );
};

type ListI<T = any> = React.FC<IListProps<T>>;

export default React.memo(List);
