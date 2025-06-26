import { BaseCin7SDK } from '../../core/base-sdk';

export class SalesQueries extends BaseCin7SDK {
  async getSales<T>(options?: { 
    search?: string; 
    limit?: number; 
    page?: number; 
  }): Promise<T> {
    return this.get<T>('sale', options);
  }

  async getSale<T>(id: string): Promise<T> {
    return this.get<T>(`sale/${id}`);
  }
}