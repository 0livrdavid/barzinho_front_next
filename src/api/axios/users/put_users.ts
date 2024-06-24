import { PutUser, PutUserResponse } from "@/api/interfaces/users/put_users";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const putUsers = async (data: PutUser, id: string) => {
    try {
        const response = await API.put(`users/${id}`, data)
        return response.data as PutUserResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "message": `Falha na tentativa de cadastrar usuário: ${errorMessage}` };
    }
};

export default putUsers;

