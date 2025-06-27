import { BaseCin7SDK } from '../../core/base-sdk';

    export class DisassemblyMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('disassembly', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`disassembly/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`disassembly/${id}`);
      }
    }