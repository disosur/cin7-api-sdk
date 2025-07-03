import { BaseCin7SDK } from "../../core/base-sdk";

export class LocationQueries extends BaseCin7SDK {
  async getLocations<T>(options?: {
    search?: string;
    limit?: number;
    page?: number;
  }): Promise<T> {
    return this.get<T>("ref/location", options);
  }
}
