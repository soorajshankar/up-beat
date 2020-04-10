import React from 'react';
import styled from 'styled-components';
import { IThemed } from '../../../contexts/Themes';

const HeaderDiv = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: margin 400ms;
    background-color: ${(props: IThemed) => props.theme.bg_card};
`;

export const Header = () => <HeaderDiv>
    <div>Tasfsag</div>
    <div>Tasfsag</div>
    <div>Tasfsag</div>
</HeaderDiv>;
export default Header;
