export interface AuthenticateRequest {
    number: string
    password_hash: string
}

export interface AuthenticateResponse {
    success: boolean;
    message: string;
    data: {
        token: string;
        user: {
            id: string;
            name: string;
            number: string;
            age: number;
            valor_reservado_caixa: number;
            deleted_at: string | null;
        };
    } | null;
}
