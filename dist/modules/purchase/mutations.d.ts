import { BaseCin7SDK } from '../../core/base-sdk';
export declare class PurchaseMutations extends BaseCin7SDK {
    createPurchase<T>(purchaseData: any): Promise<T>;
    updatePurchase<T>(id: string, purchaseData: any): Promise<T>;
    deletePurchase<T>(id: string): Promise<T>;
}
//# sourceMappingURL=mutations.d.ts.map