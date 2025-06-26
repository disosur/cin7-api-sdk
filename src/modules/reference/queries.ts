import { BaseCin7SDK } from '../../core/base-sdk';

export class ReferenceQueries extends BaseCin7SDK {
  async getLocations<T>(): Promise<T> {
    return this.get<T>('ref/location');
  }

  async getProductCategories<T>(): Promise<T> {
    return this.get<T>('ref/category');
  }

  async getProductBrands<T>(): Promise<T> {
    return this.get<T>('ref/brand');
  }

  async getPaymentTerms<T>(): Promise<T> {
    return this.get<T>('ref/paymentterm');
  }
}