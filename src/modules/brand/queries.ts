import { BaseCin7SDK } from "../../core/base-sdk";

export class BrandQueries extends BaseCin7SDK {
  async list<T>(options?: {
    Name?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("brand", options);
  }
}
