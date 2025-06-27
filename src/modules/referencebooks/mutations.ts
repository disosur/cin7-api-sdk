import { BaseCin7SDK } from '../../core/base-sdk';

    export class ReferencebooksMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('referencebooks', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`referencebooks/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`referencebooks/${id}`);
      }
    }