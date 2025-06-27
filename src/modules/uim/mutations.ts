import { BaseCin7SDK } from '../../core/base-sdk';

    export class UIMMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('uim', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`uim/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`uim/${id}`);
      }
    }