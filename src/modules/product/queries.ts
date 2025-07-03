import { BaseCin7SDK } from "../../core/base-sdk";

export interface ProductQueryOptions {
  ID?: string;
  Page?: number;
  Limit?: number;
  Name?: string;
  Sku?: string;
  ModifiedSince?: string;
  IncludeDeprecated?: boolean;
  IncludeBOM?: boolean;
  IncludeSuppliers?: boolean;
  IncludeMovements?: boolean;
  IncludeAttachments?: boolean;
  IncludeReorderLevels?: boolean;
  IncludeCustomPrices?: boolean;
}

export class ProductQueries extends BaseCin7SDK {
  async getProducts<T>(options?: ProductQueryOptions): Promise<T> {
    return this.get<T>("product", options);
  }
}
