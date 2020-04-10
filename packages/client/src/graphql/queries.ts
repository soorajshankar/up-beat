import gql from 'graphql-tag';

export const GET_ANALYTICS = gql`
    query getAnalytics($input: String!, $from: DateTime!, $to: DateTime!) {
        getAnalytics(input: $input, from: $from, to: $to) {
            url
            status
            createdAt
            method
            rDuration
        }
    }
`;

export const GET_OVERVIEW = gql`
    query getAnalytics($url: String!, $type: String!) {
        getOverview(url: $url, type: $type) {
            type
            value
            prev
        }
    }
`;
