import { BaseCin7SDK } from '../../core/base-sdk';

export class PurchaseQueries extends BaseCin7SDK {
  async getPurchases<T>(options?: { 
    search?: string; 
    limit?: number; 
    page?: number; 
  }): Promise<T> {
    return this.get<T>('purchase', options);
  }

  async getPurchase<T>(id: string): Promise<T> {
    return this.get<T>(`purchase/${id}`);
  }
}