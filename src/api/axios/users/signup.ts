import { SignupData, SignupResponse } from "@/api/interfaces/users/signup";
import API from "@/api/api";
import { AxiosError } from "axios";
import http_code from "@/api/http_code";

const signup = async (data: SignupData) => {
    try {
        return await API.post('user/signup/', data) as SignupResponse;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.status ? http_code[axiosError.response.status] : "Erro desconhecido";
        return { "success": false, "msg": `Falha na tentativa de registrar: ${errorMessage}`, "data": null } as SignupResponse;
    }
};

export default signup;