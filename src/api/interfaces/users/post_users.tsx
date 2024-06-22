export interface User {
    id: string;
    name: string;
    number: string;
    age: number;
    valor_reservado_caixa: number;
    password_hash: string;
}

export type PostUser = Omit<User, 'id'>;

export interface PostUserResponse {
    success: boolean;
    msg: string;
    data: User;
}