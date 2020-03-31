import { IThemed } from '../../../contexts/Themes';
import styled from 'styled-components';

export const PlainCard = styled.div<IThemed>`
    background-color: ${(props: IThemed) => props.theme.bg_card};
    box-shadow: 1px 1px 3px 1px #e0e0e0;
    margin: 20px 10px;
    border-radius: 5px;
`;
