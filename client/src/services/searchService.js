import api from "./api";

export async function searchCompanies(query) {

    const response = await api.get(`/api/search?q=${query}`);

    return response.data;

}