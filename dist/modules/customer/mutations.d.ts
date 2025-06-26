import { BaseCin7SDK } from '../../core/base-sdk';
export declare class CustomerMutations extends BaseCin7SDK {
    createCustomer<T>(customerData: any): Promise<T>;
    updateCustomer<T>(id: string, customerData: any): Promise<T>;
    deleteCustomer<T>(id: string): Promise<T>;
}
//# sourceMappingURL=mutations.d.ts.map