import styled from 'styled-components';
import { IThemed } from '../../../contexts/Themes';

interface IInput {
    fontSize?: string | number;
}

export const Input = styled.input<IThemed & IInput>`
    flex-grow: 1;
    border-bottom: solid 1px
        ${props => (props.theme.fg_inactive ? props.theme.fg_inactive : '#d1dbe2')};
    border: none;
    font-size: ${props => (props.fontSize ? props.fontSize : 'small')}};
`;
