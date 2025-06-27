import { BaseCin7SDK } from '../../core/base-sdk';

    export class TransactionsMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('transactions', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`transactions/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`transactions/${id}`);
      }
    }