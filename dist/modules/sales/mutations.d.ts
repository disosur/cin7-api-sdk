import { BaseCin7SDK } from '../../core/base-sdk';
export declare class SalesMutations extends BaseCin7SDK {
    createSale<T>(saleData: any): Promise<T>;
    updateSale<T>(id: string, saleData: any): Promise<T>;
    deleteSale<T>(id: string): Promise<T>;
}
//# sourceMappingURL=mutations.d.ts.map