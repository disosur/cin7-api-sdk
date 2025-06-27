import { BaseCin7SDK } from '../../core/base-sdk';

    export class StockMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('stock', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`stock/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`stock/${id}`);
      }
    }