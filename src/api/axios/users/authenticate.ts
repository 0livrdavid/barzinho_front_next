import { AuthenticateRequest, AuthenticateResponse } from "@/api/interfaces/users/authenticate";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const signin = async (data: AuthenticateRequest) => {
    try {
        const response = await API.post('authenticate', data)
        console.log(response.data)
        return response.data as AuthenticateResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "message": `Falha na tentativa de entrar: ${errorMessage}`, "data": null } as AuthenticateResponse;
    }
};

export default signin;

