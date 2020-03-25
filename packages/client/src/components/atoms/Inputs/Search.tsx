import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../Flex/FlexBox';
import { Search } from '../../icons';
import { Input } from './Input';

export const SearchInput = () => {
    return (
        <FlexBox flexDirection="row">
            <Search />
            <Input placeholder="Search here" />
        </FlexBox>
    );
};
