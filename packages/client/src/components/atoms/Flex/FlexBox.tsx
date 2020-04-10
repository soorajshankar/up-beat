import styled from 'styled-components';

interface IFlexBox {
    flexDirection: string;
    color?: string;
}

export const FlexBox = styled.div<IFlexBox>`
    display: flex;
    flex-direction: ${props => props.flexDirection && props.flexDirection};
`;
