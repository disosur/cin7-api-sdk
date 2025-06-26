import { BaseCin7SDK } from '../../core/base-sdk';

export class SalesMutations extends BaseCin7SDK {
  async createSale<T>(saleData: any): Promise<T> {
    return this.post<T>('sale', saleData);
  }

  async updateSale<T>(id: string, saleData: any): Promise<T> {
    return this.put<T>(`sale/${id}`, saleData);
  }

  async deleteSale<T>(id: string): Promise<T> {
    return this.delete<T>(`sale/${id}`);
  }
}