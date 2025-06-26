import { BaseCin7SDK } from '../../core/base-sdk';
export class SalesMutations extends BaseCin7SDK {
    async createSale(saleData) {
        return this.post('sale', saleData);
    }
    async updateSale(id, saleData) {
        return this.put(`sale/${id}`, saleData);
    }
    async deleteSale(id) {
        return this.delete(`sale/${id}`);
    }
}
//# sourceMappingURL=mutations.js.map