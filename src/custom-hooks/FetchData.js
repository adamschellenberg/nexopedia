import { server_calls } from '../api';

export const useGetData = {
    useItems: async () => {
        const result = await server_calls.items();
        return result;
    },

    useNexomon: async () => {
        const result = await server_calls.nexomon();
        return result;
    },

    useGetSingleNexomon: async (nexomon) => {
        const result = await server_calls.singleNexomon(nexomon);
        const nexomonNumber = result.number;
        const nexomonNumberPadded = nexomonNumber.toString().padStart(3, "0");
        result.numberPadded = nexomonNumberPadded;
        const urlForImage = "../db/extinction/images/nexomon/small/" + nexomonNumberPadded + "-" + result.name.toLowerCase() + ".png";
        result.imgUrl = urlForImage;
        const nexomonTypeLowerCase = result.nexomonType.toLowerCase();
        const urlForType = "../db/extinction/images/elements/" + nexomonTypeLowerCase + ".png";
        result.typeUrl = urlForType;
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