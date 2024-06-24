import { DeleteUserResponse } from "@/api/interfaces/users/delete_users";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const deleteUser = async (id: string) => {
    try {
        const response = await API.delete(`users/${id}`)
        return response.data as DeleteUserResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "message": `Falha na tentativa de cadastrar usuário: ${errorMessage}` };
    }
};

export default deleteUser;