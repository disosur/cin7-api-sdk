import { BaseCin7SDK } from '../../core/base-sdk';
export class PurchaseQueries extends BaseCin7SDK {
    async getPurchases(options) {
        return this.get('purchase', options);
    }
    async getPurchase(id) {
        return this.get(`purchase/${id}`);
    }
}
//# sourceMappingURL=queries.js.map