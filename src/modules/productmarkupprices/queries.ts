import { BaseCin7SDK } from '../../core/base-sdk';

    export class ProductmarkuppricesQueries extends BaseCin7SDK {
      async get<T>(id: string): Promise<T> {
        return this.get<T>(`productmarkupprices/${id}`);
      }

      async list<T>(options?: {
        search?: string;
        limit?: number;
        page?: number;
      }): Promise<T> {
        return this.get<T>('productmarkupprices', options);
      }
    }