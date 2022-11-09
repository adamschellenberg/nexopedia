import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';
import Cookies from 'js-cookie';

export const useGetData = {
    useItems: async () => {
        const result = await server_calls.items();
        return result;
    },

    useNexomon: async () => {
        const result = await server_calls.nexomon();
        return result;
    },

    useStatus: async () => {
        const result = await server_calls.status();
        return result;
    },

    useType: async () => {
        const result = await server_calls.type();
        return result;
    },

    useVault: async () => {
        const result = await server_calls.vaults();
        return result;
    },

    useKey: async () => {
        const result = await server_calls.keys();
        return result; 
    },

    useUserAvatar: async () => {
        let token = Cookies.get('nexopedia-token');
        const result = await server_calls.getAvatar(token);
        console.log(result);
        return result;
    }
}