import { BaseCin7SDK } from '../../core/base-sdk';
export class PurchaseMutations extends BaseCin7SDK {
    async createPurchase(purchaseData) {
        return this.post('purchase', purchaseData);
    }
    async updatePurchase(id, purchaseData) {
        return this.put(`purchase/${id}`, purchaseData);
    }
    async deletePurchase(id) {
        return this.delete(`purchase/${id}`);
    }
}
//# sourceMappingURL=mutations.js.map