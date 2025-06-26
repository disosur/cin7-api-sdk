import { BaseCin7SDK } from '../../core/base-sdk';

export class ProductQueries extends BaseCin7SDK {
  async getProducts<T>(options?: { 
    search?: string; 
    sku?: string; 
    name?: string; 
    limit?: number; 
    page?: number; 
  }): Promise<T> {
    return this.get<T>('product', options);
  }

  async getProduct<T>(id: string): Promise<T> {
    return this.get<T>(`product/${id}`);
  }
}