import * as React from 'react';

declare class StoreList<T> extends React.Component<ListProps<T>> {
    static displayName: string;
    constructor(props: ListProps<T>);
    render(): JSX.Element;
}
export default StoreList;

export interface ListProps<T> {
    data?: T[];
}
