import axios from 'axios';

const base_url = 'http://localhost:5000/api';

export const server_calls = {
    
    items: async () => {
        const response = await fetch(`${base_url}/item/all`);
        let data = await response.json();
        return data;
    },

    itemCreate: async(item) => {
        let json = JSON.stringify(item);
        axios.post(`${base_url}/item/create`, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    itemUpdate: async (item) => {        
        let json = JSON.stringify(item);
        axios.put(`${base_url}/item/update`, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    itemDelete: async (item) => {
        let json = JSON.stringify(item);
        axios.delete(`${base_url}/item/delete`, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
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