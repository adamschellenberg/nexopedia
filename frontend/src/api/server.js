import ItemsJSON from '../assets/jsons/items.json';
import NexomonJSON from '../assets/jsons/nexomon-extinction.json';
import StatusJSON from '../assets/jsons/status-effects.json';
import TypeJSON from '../assets/jsons/type-effectiveness.json';

let token = '';
export const server_calls = {
    items: () => {
        return ItemsJSON;
    },

    nexomon: () => {
        let result = NexomonJSON;
        return result;
    },

    status: () => {
        return StatusJSON;
    },

    type: () => {
        return TypeJSON;
    }
}