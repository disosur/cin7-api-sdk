import { BaseCin7SDK } from '../../core/base-sdk';

    export class ProductmarkuppricesMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('productmarkupprices', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`productmarkupprices/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`productmarkupprices/${id}`);
      }
    }