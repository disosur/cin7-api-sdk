import { BaseCin7SDK } from '../../core/base-sdk';

    export class ProductcategoriesMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('productcategories', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`productcategories/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`productcategories/${id}`);
      }
    }