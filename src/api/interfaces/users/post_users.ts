export interface User {
    id: string;
    name: string;
    number: string;
    password_hash: string;
    age: number;
    valor_reservado_caixa: number;
    deleted_at: string | null;
}

export type PostUser = Omit<User, 'id'>;

export interface PostUserResponse {
    success: boolean;
    message: string;
}