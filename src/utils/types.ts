export interface User {
    id?: string | number;
    email: string;
    name?: string;
    [key: string]: any;
}

export interface AuthResponse {
    accessToken: string;
    user: User;
    [key: string]: any;
}
