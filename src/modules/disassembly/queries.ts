import { BaseCin7SDK } from '../../core/base-sdk';

    export class DisassemblyQueries extends BaseCin7SDK {
      async get<T>(id: string): Promise<T> {
        return this.get<T>(`disassembly/${id}`);
      }

      async list<T>(options?: {
        search?: string;
        limit?: number;
        page?: number;
      }): Promise<T> {
        return this.get<T>('disassembly', options);
      }
    }