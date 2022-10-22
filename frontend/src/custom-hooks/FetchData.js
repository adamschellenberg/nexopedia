import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = {
    useItems: () => {
        const [itemsData, setItemsData ] = useState<[]>([]);
        async function handleDataFetch(){
            const result = await server_calls.items();
            setItemsData(result);
        }

        useEffect( () => {
            handleDataFetch();
        }, []);

        return (
            {itemsData, getItemData:handleDataFetch}
        )
    },

    useNexomon: () => {
        return (server_calls.nexomon());
        // const [ nexomonData, setNexomonData ] = useState<[]>([]);
        // async function handleDataFetch(){
        //     const result = await server_calls.nexomon();
        //     setNexomonData(result);
        // }

        // useEffect( () => {
        //     handleDataFetch();
        // }, []);

        // return (
        //     {nexomonData, getNexomonData:handleDataFetch}
        // )
    },

    useStatus: () => {
        const [ statusData, setStatusData ] = useState<[]>([]);
        async function handleDataFetch(){
            const result = await server_calls.status();
            setStatusData(result);
        }

        useEffect( () => {
            handleDataFetch();
        }, []);

        return (
            {statusData, getStatusData:handleDataFetch}
        )
    },

    useType: () => {
        const [ typeData, setTypeData ] = useState <[]>([]);
        async function handleDataFetch() {
            const result = await server_calls.type();
            setTypeData(result);
        }

        useEffect( () => {
            handleDataFetch();
        }, []);

        return (
            { typeData, getTypeData:handleDataFetch}
        )
    }
}