import { BaseCin7SDK } from '../../core/base-sdk';
export class ProductMutations extends BaseCin7SDK {
    async createProduct(productData) {
        return this.post('product', productData);
    }
    async updateProduct(id, productData) {
        return this.put(`product/${id}`, productData);
    }
    async deleteProduct(id) {
        return this.delete(`product/${id}`);
    }
}
//# sourceMappingURL=mutations.js.map