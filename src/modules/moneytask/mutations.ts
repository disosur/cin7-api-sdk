import { BaseCin7SDK } from '../../core/base-sdk';

    export class MoneytaskMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('moneytask', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`moneytask/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`moneytask/${id}`);
      }
    }