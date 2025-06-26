import { BaseCin7SDK } from '../../core/base-sdk';

export class CustomerMutations extends BaseCin7SDK {
  async createCustomer<T>(customerData: any): Promise<T> {
    return this.post<T>('customer', customerData);
  }

  async updateCustomer<T>(id: string, customerData: any): Promise<T> {
    return this.put<T>(`customer/${id}`, customerData);
  }

  async deleteCustomer<T>(id: string): Promise<T> {
    return this.delete<T>(`customer/${id}`);
  }
}