import { BaseCin7SDK } from '../../core/base-sdk';

    export class InventoryWriteoffMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('inventorywriteoff', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`inventorywriteoff/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`inventorywriteoff/${id}`);
      }
    }