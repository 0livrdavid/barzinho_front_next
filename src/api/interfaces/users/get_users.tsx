export interface User {
    id: string;
    name: string;
    number: string;
    age: number;
    valor_reservado_caixa: number;
}

export interface GetUsers {
    data: User[];
}