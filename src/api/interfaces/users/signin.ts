export interface SigninData {
    username: string;
    password: string;
}

export interface SigninResponse {
    success: boolean;
    msg: string;
    data: {
        user: {
            id: string;
            username: string;
            name: string;
            email: string;
        };
        token: string;
    } | null;
}

