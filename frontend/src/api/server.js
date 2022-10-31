import Cookies from 'js-cookie';

const base_url = 'http://128.199.5.111/api';
const base_url_heroku = 'https://ct-nexopedia-adamschellenberg.herokuapp.com';
const base_url_testing = 'http://127.0.0.1:5000'


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
    },

    signin: async (email, password) => {
        const response = await fetch(`${base_url_heroku}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error ('Failed to login')
        };
        let data = await response.json()
        
        Cookies.set('nexopedia-token', data.token, {expires: 2 });
        return
    },

    signup: async (email, password) => {
        const response = await fetch(`${base_url_heroku}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error ('Failed to create new account')
        };
        
        let data = await response.json()

        return server_calls.signin(email, password);;
    },

    logout: () => {

    },

    updateAvatar: async (token, avatar) => {
        const response = await fetch(`${base_url_heroku}/avatar/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify( {
                avatar: avatar,
                token: token
            })
        });

        if (!response.ok) {
            throw new Error ('Failed to update avatar');
        };
        console.log('testing update call');
        let data = await response.json();
        console.log('Update response: ', data);
        return data;
    },

    getAvatar: async (token) => {
        const response = await fetch(`${base_url_heroku}/avatar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify( {
                token: token
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch avatar data')
        }

        return await response.json()
    }
}