export interface User {
    id: string;
    name: string;
    number: string;
    password_hash: string;
    age: number;
    valor_reservado_caixa: number;
    deleted_at: string | null;
}

export type GetUsers = Omit<User, 'password_hash'>;

export interface GetUsersResponse {
    success: boolean;
    message: string;
    data: GetUsers[] | null;
}