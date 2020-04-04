import gql from 'graphql-tag';

export const CREATE_URL = gql`
    mutation createUrl($url: String!) {
        createUrl(input: { url: $url, method: "GET", active: true }) {
            id
        }
    }
`;
