export interface ApiResponse {
    success: boolean;
    message: string;
    token?: string;
    username?: string;
    role?: string;
    data: any;
}
