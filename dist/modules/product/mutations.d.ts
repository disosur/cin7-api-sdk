import { BaseCin7SDK } from '../../core/base-sdk';
export declare class ProductMutations extends BaseCin7SDK {
    createProduct<T>(productData: any): Promise<T>;
    updateProduct<T>(id: string, productData: any): Promise<T>;
    deleteProduct<T>(id: string): Promise<T>;
}
//# sourceMappingURL=mutations.d.ts.map