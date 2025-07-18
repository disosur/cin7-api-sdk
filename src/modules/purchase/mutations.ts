import { BaseCin7SDK } from '../../core/base-sdk';

    export class PurchaseMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('purchase', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`purchase/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`purchase/${id}`);
      }
    }