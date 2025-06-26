import { BaseCin7SDK } from '../../core/base-sdk';
export declare class CustomerQueries extends BaseCin7SDK {
    getCustomers<T>(options?: {
        search?: string;
        limit?: number;
        page?: number;
    }): Promise<T>;
    getCustomer<T>(id: string): Promise<T>;
}
//# sourceMappingURL=queries.d.ts.map