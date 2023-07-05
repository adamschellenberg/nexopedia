const base_url = 'https://nexomonapi.azurewebsites.net/api';

export const server_calls = {
    
    items: async () => {
        const response = await fetch(`${base_url}/item/all`);
        let data = await response.json();
        return data;
    },

    nexomon: async () => {
        const response = await fetch(`${base_url}/nexomon/all`);
        let data = await response.json();
        return data;
    },

    status: async () => {
        const response = await fetch(`${base_url}/statusEffect/all`);
        let data = await response.json();
        return data;
    },

    type: async () => {
        const response = await fetch(`${base_url}/typeeffectiveness/all`);
        let data = await response.json();
        return data;
    },

    vaults: async () => {
        const response = await fetch(`${base_url}/vault/all`);
        let data = await response.json();
        return data;
    },

    keys: async () => {
        const response = await fetch(`${base_url}/key/all`);
        let data = await response.json();
        return data;    
    }

}