import { BaseCin7SDK } from '../../core/base-sdk';

export class PurchaseMutations extends BaseCin7SDK {
  async createPurchase<T>(purchaseData: any): Promise<T> {
    return this.post<T>('purchase', purchaseData);
  }

  async updatePurchase<T>(id: string, purchaseData: any): Promise<T> {
    return this.put<T>(`purchase/${id}`, purchaseData);
  }

  async deletePurchase<T>(id: string): Promise<T> {
    return this.delete<T>(`purchase/${id}`);
  }
}