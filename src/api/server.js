const base_url = '/db/extinction/json';

export const server_calls = {
    
    items: async () => {
        const response = await fetch(`${base_url}/items.json`);
        let data = await response.json();
        return data;
    },

    nexomon: async () => {
        const response = await fetch(`${base_url}/nexomon.json`);
        let data = await response.json();
        return data;
    },

    status: async () => {
        const response = await fetch(`${base_url}/statusEffect.json`);
        let data = await response.json();
        return data;
    },

    type: async () => {
        const response = await fetch(`${base_url}/typeeffectiveness.json`);
        let data = await response.json();
        return data;
    },

    vaults: async () => {
        const response = await fetch(`${base_url}/vault.json`);
        let data = await response.json();
        return data;
    },

    keys: async () => {
        const response = await fetch(`${base_url}/key.json`);
        let data = await response.json();
        return data;    
    }

}