import { PostUser, PostUserResponse } from "@/api/interfaces/users/post_users";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const postUsers = async (data: PostUser) => {
    try {
        const response = await API.post(`users/`, data)
        return response.data as PostUserResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "msg": `Falha na tentativa de cadastrar usuário: ${errorMessage}`, "data": [] };
    }
};

export default postUsers;

