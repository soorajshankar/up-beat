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
