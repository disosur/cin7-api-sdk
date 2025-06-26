import { BaseCin7SDK } from '../../core/base-sdk';
export declare class SalesQueries extends BaseCin7SDK {
    getSales<T>(options?: {
        search?: string;
        limit?: number;
        page?: number;
    }): Promise<T>;
    getSale<T>(id: string): Promise<T>;
}
//# sourceMappingURL=queries.d.ts.map