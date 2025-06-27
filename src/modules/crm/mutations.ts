import { BaseCin7SDK } from '../../core/base-sdk';

    export class CrmMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('crm', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`crm/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`crm/${id}`);
      }
    }