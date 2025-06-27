import { BaseCin7SDK } from '../../core/base-sdk';

    export class ProductcategoriesQueries extends BaseCin7SDK {
      async get<T>(id: string): Promise<T> {
        return this.get<T>(`productcategories/${id}`);
      }

      async list<T>(options?: {
        search?: string;
        limit?: number;
        page?: number;
      }): Promise<T> {
        return this.get<T>('productcategories', options);
      }
    }