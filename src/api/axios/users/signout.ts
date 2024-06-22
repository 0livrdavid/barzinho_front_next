import { SignoutResponse } from "@/api/interfaces/users/signout";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const signout = async (token: string) => {
    try {
        const response = await API.post('user/signout/', null, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        return response.data as SignoutResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "msg": `Falha na tentativa de entrar: ${errorMessage}`, "data": null } as SignoutResponse;
    }
};

export default signout;