export interface SignupData {
    username: string;
    name: string;
    password: string;
    email: string;
}

export interface SignupResponse {
    success: boolean;
    msg: string;
    data: {
        username: string;
        name: string;
        email: string;
        token: string;
    } | null;
}

