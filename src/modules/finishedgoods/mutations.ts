import { BaseCin7SDK } from '../../core/base-sdk';

    export class FinishedGoodsMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('finishedgoods', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`finishedgoods/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`finishedgoods/${id}`);
      }
    }