import { BaseCin7SDK } from '../../core/base-sdk';

    export class ProductfamilyMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('productfamily', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`productfamily/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`productfamily/${id}`);
      }
    }