export interface Sale {
    id: string;
    name: string;
    number: string;
    age: number;
    valor_reservado_caixa: number;
}

export interface GetSales {
    data: Sale[];
}