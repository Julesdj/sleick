import axios from "axios";

const apiEndpoint = "/api/tickets";

export const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, tickets: action.payload, loading: false };
        case "FETCH_FAILED":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export async function getTickets() {
    return await axios.get(apiEndpoint);
}
