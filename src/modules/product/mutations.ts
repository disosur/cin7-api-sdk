import { BaseCin7SDK } from '../../core/base-sdk';

export class ProductMutations extends BaseCin7SDK {
  async createProduct<T>(productData: any): Promise<T> {
    return this.post<T>('product', productData);
  }

  async updateProduct<T>(id: string, productData: any): Promise<T> {
    return this.put<T>(`product/${id}`, productData);
  }

  async deleteProduct<T>(id: string): Promise<T> {
    return this.delete<T>(`product/${id}`);
  }
}