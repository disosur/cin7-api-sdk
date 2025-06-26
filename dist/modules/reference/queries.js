import { BaseCin7SDK } from '../../core/base-sdk';
export class ReferenceQueries extends BaseCin7SDK {
    async getLocations() {
        return this.get('ref/location');
    }
    async getProductCategories() {
        return this.get('ref/category');
    }
    async getProductBrands() {
        return this.get('ref/brand');
    }
    async getPaymentTerms() {
        return this.get('ref/paymentterm');
    }
}
//# sourceMappingURL=queries.js.map