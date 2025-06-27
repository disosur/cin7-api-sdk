import { BaseCin7SDK } from '../../core/base-sdk';

    export class BrandMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('brand', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`brand/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`brand/${id}`);
      }
    }