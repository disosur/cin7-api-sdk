import { BaseCin7SDK } from '../../core/base-sdk';
export declare class ProductQueries extends BaseCin7SDK {
    getProducts<T>(options?: {
        search?: string;
        sku?: string;
        name?: string;
        limit?: number;
        page?: number;
    }): Promise<T>;
    getProduct<T>(id: string): Promise<T>;
}
//# sourceMappingURL=queries.d.ts.map