import { BaseCin7SDK } from '../../core/base-sdk';

export class CustomerQueries extends BaseCin7SDK {
  async getCustomers<T>(options?: { 
    search?: string; 
    limit?: number; 
    page?: number; 
  }): Promise<T> {
    return this.get<T>('customer', options);
  }

  async getCustomer<T>(id: string): Promise<T> {
    return this.get<T>(`customer/${id}`);
  }
}