import { BaseCin7SDK } from "../../core/base-sdk";

export class FixedAssetTypeQueries extends BaseCin7SDK {
  async getFixedAssetType<T>(options?: {
    FixedAssetType?: string;
    Name?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("ref/fixedassettype", options);
  }
}
