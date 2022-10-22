import ItemsJSON from '../assets/jsons/items.json';
import NexomonJSON from '../assets/jsons/nexomon-extinction.json';
import StatusJSON from '../assets/jsons/status-effects.json';
import TypeJSON from '../assets/jsons/type-effectiveness.json';
import VaultJSON from '../assets/jsons/vaults-and-keys.json';

let token = '';
export const server_calls = {
    items: () => {
        let result = ItemsJSON;
        return result;
    },

    nexomon: () => {
        let result = NexomonJSON;
        return result;
    },

    status: () => {
        let result = StatusJSON;
        return result;
    },

    type: () => {
        let result = TypeJSON;
        return result;
    },

    vaults: () => {
        let result = VaultJSON;
        return result;
    }
}