import { BaseCin7SDK } from '../../core/base-sdk';

    export class PricetiersMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('pricetiers', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`pricetiers/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`pricetiers/${id}`);
      }
    }