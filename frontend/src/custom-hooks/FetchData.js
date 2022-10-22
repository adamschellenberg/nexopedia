import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = {
    useItems: () => {
        return (server_calls.items());
        // const [itemsData, setItemsData ] = useState<[]>([]);
        // async function handleDataFetch(){
        //     const result = await server_calls.items();
        //     setItemsData(result);
        // }

        // useEffect( () => {
        //     handleDataFetch();
        // }, []);

        // return (
        //     {itemsData, getItemData:handleDataFetch}
        // )
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
        return (server_calls.status());
        // const [ statusData, setStatusData ] = useState<[]>([]);
        // async function handleDataFetch(){
        //     const result = await server_calls.status();
        //     setStatusData(result);
        // }

        // useEffect( () => {
        //     handleDataFetch();
        // }, []);

        // return (
        //     {statusData, getStatusData:handleDataFetch}
        // )
    },

    useType: () => {
        return (server_calls.type());
        // const [ typeData, setTypeData ] = useState <[]>([]);
        // async function handleDataFetch() {
        //     const result = await server_calls.type();
        //     setTypeData(result);
        // }

        // useEffect( () => {
        //     handleDataFetch();
        // }, []);

        // return (
        //     { typeData, getTypeData:handleDataFetch}
        // )
    },

    useVault: () => {
        return (server_calls.vaults());
    }
}