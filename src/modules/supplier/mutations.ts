import { BaseCin7SDK } from '../../core/base-sdk';

    export class SupplierMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('supplier', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`supplier/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`supplier/${id}`);
      }
    }