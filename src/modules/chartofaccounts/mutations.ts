import { BaseCin7SDK } from '../../core/base-sdk';

    export class ChartofaccountsMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('chartofaccounts', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`chartofaccounts/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`chartofaccounts/${id}`);
      }
    }