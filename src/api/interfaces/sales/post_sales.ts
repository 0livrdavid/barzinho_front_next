export interface Sale {
    id: string;
    name: string;
    number: string;
    age: number;
    valor_reservado_caixa: number;
    password_hash: string;
}

export type PostSale = Omit<Sale, 'id'>;

export interface PostSaleResponse {
    success: boolean;
    msg: string;
    data: Sale;
}