import React from 'react';
import {useQuery} from '@apollo/client';
import PopOnSideMenu from './PopOnSideMenu';
import {isClosedQuery} from '../../../../apolloClient/PopOnSideMenu/queries';

export default function PopOnSideMenuWrapper() {
    const {data} = useQuery(isClosedQuery);
    return (
        <>
            {
                data.isClosed ? <></> : <PopOnSideMenu />
            }
        </>
    )
}
