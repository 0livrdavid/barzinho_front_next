import { GetUsers, GetUsersResponse } from "@/api/interfaces/users/get_users";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const getUsers = async () => {
    try {
        const response = await API.get(`users`)
        return { "success": true, "message": "Usuários listados com sucesso", "data": response.data } as GetUsersResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "message": `Falha na tentativa de listar usuários: ${errorMessage}`, "data": [] } as GetUsersResponse;
    }
};

export default getUsers;

