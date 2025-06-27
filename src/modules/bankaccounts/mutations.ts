import { BaseCin7SDK } from '../../core/base-sdk';

    export class BankAccountsMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('bankaccounts', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`bankaccounts/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`bankaccounts/${id}`);
      }
    }