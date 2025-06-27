import { BaseCin7SDK } from '../../core/base-sdk';

    export class PaymenttermMutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('paymentterm', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(`paymentterm/${id}`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(`paymentterm/${id}`);
      }
    }