import { BaseCin7SDK } from '../../core/base-sdk';

    export class TaxMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('tax', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`tax/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`tax/${id}`);
      }
    }