import {  GetUsers } from "@/api/interfaces/users/post_users";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const getUsers = async () => {
    try {
        const response = await API.get(`users/`)
        return { "success": true, "msg": "Usuários listados com sucesso", "data": response.data as GetUsers };
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "msg": `Falha na tentativa de listar usuários: ${errorMessage}`, "data": [] };
    }
};

export default getUsers;

