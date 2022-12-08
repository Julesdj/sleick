import axios from "axios";

const apiEndpoint = "/api/tickets";

export async function getTickets() {
    return await axios.get(apiEndpoint);
}
