import React from 'react';
import styled from 'styled-components';

interface IFlexChildren {
    grow?: boolean;
    alignSelf?: boolean;
}

export const FlexChildren = styled.div`
    display: flex;
    flex-direction: flex;
`;
