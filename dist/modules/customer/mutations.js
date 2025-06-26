import { BaseCin7SDK } from '../../core/base-sdk';
export class CustomerMutations extends BaseCin7SDK {
    async createCustomer(customerData) {
        return this.post('customer', customerData);
    }
    async updateCustomer(id, customerData) {
        return this.put(`customer/${id}`, customerData);
    }
    async deleteCustomer(id) {
        return this.delete(`customer/${id}`);
    }
}
//# sourceMappingURL=mutations.js.map