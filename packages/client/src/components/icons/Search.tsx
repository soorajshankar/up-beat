import React from 'react';
import stylled from 'styled-components';
import { IThemed } from '../../contexts/Themes';

const SVG = stylled.svg<IThemed>`
    color:${props => props.theme.fg_inactive};
    padding:5px;
`;
export const Search = () => (
    <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
    >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </SVG>
);
