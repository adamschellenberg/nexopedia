import { server_calls } from '../api';

export const useGetData = {
    useItems: async () => {
        const result = await server_calls.items();
        return result;
    },

    createItem: async(item) => {
        const result = await server_calls.itemCreate(item);
        return result;
    },

    updateItem: async (item) => {
        const result = await server_calls.itemUpdate(item);
        return result;
    },

    deleteItem: async (item) => {
        const result = await server_calls.itemDelete(item);
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
    }
}