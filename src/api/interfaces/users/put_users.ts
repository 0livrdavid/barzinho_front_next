export interface User {
    id: string;
    name: string;
    number: string;
    password_hash: string;
    age: number;
    valor_reservado_caixa: number;
    deleted_at: string | null;
}

export type PutUser = Omit<User, 'id' | 'password_hash' | 'deleted_at'>;

export type PutUserTable = Omit<User, 'password_hash' | 'deleted_at'>;

export interface PutUserResponse {
    success: boolean;
    message: string;
}