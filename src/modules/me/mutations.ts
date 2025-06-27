import { BaseCin7SDK } from '../../core/base-sdk';

    export class MeMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('me', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`me/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`me/${id}`);
      }
    }