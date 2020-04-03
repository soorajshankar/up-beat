import styled from 'styled-components';

export interface IGrid {
    flexDirection?: string;
}

const Grid = styled.div<IGrid>`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    flex-direction: ${(props: IGrid) => props.flexDirection || 'row'};
    height: 100%;
    overflow: auto;
    margin: 70px 35px;
`;

export const Row = styled.div<IRow>`
    display: flex;
    flex-flow: ${(props: IRow) => props.flow || ''};
    flex-direction: ${(props: IRow) => (props.reverse ? 'row-reverse' : 'row')};
`;
export interface IRow {
    flow?: string;
    reverse?: boolean;
}

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Grid;
