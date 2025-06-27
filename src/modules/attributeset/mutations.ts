import { BaseCin7SDK } from '../../core/base-sdk';

    export class AttributeSetMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('attributeset', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`attributeset/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`attributeset/${id}`);
      }
    }