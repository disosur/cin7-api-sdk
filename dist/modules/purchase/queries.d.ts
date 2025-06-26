import { BaseCin7SDK } from '../../core/base-sdk';
export declare class PurchaseQueries extends BaseCin7SDK {
    getPurchases<T>(options?: {
        search?: string;
        limit?: number;
        page?: number;
    }): Promise<T>;
    getPurchase<T>(id: string): Promise<T>;
}
//# sourceMappingURL=queries.d.ts.map