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

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Grid;
