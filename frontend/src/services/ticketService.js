import axios from 'axios';

const tapiEndpoint = '/api/tickets';

export async function getTickets() {
    return await axios.get(tapiEndpoint);
}
