import { gql } from '@apollo/client';

export const isClosedQuery = gql`
    query {
        isClosed @client
    }
`;
