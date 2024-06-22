import { SigninData, SigninResponse } from "@/api/interfaces/users/signin";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const signin = async (data: SigninData) => {
    try {
        const response = await API.post('user/signin/', data)
        return response.data as SigninResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "msg": `Falha na tentativa de entrar: ${errorMessage}`, "data": null } as SigninResponse;
    }
};

export default signin;

