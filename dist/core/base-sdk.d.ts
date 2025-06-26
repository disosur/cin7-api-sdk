import { RequestOptions } from './types';
export declare class BaseCin7SDK {
    protected accountId: string;
    protected applicationKey: string;
    protected baseURL: string;
    constructor(accountId: string, applicationKey: string);
    protected makeRequest<T>(endpoint: string, options: RequestOptions): Promise<T>;
    protected get<T>(endpoint: string, params?: Record<string, any>): Promise<T>;
    protected post<T>(endpoint: string, data?: any): Promise<T>;
    protected put<T>(endpoint: string, data?: any): Promise<T>;
    protected delete<T>(endpoint: string): Promise<T>;
}
//# sourceMappingURL=base-sdk.d.ts.map