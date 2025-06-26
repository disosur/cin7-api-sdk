import { BaseCin7SDK } from '../../core/base-sdk';
export class CustomerQueries extends BaseCin7SDK {
    async getCustomers(options) {
        return this.get('customer', options);
    }
    async getCustomer(id) {
        return this.get(`customer/${id}`);
    }
}
//# sourceMappingURL=queries.js.map