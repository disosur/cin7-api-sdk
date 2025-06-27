import { BaseCin7SDK } from '../../core/base-sdk';

    export class JournalMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('journal', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`journal/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`journal/${id}`);
      }
    }