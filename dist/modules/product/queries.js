import { BaseCin7SDK } from '../../core/base-sdk';
export class ProductQueries extends BaseCin7SDK {
    async getProducts(options) {
        return this.get('product', options);
    }
    async getProduct(id) {
        return this.get(`product/${id}`);
    }
}
//# sourceMappingURL=queries.js.map