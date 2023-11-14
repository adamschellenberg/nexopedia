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

    singleNexomon: async (nexomon) => {
        const response = await fetch(`${base_url}/nexomon.json`);
        let data = await response.json();
        let singleNexomon = data.filter(function(nexomonData) {
            return nexomonData.name.toLowerCase() === nexomon;
        });
        // FILTER JSON TO SINGLE REQUESTED NEXOMON AND PASS THAT OBJECT
        return singleNexomon[0];
    },

    status: async () => {
        const response = await fetch(`${base_url}/statusEffect.json`);
        let data = await response.json();
        return data;
    },

    type: async () => {
        const response = await fetch(`${base_url}/typeEffectiveness.json`);
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