import { BaseCin7SDK } from "../../core/base-sdk";

export class CarierQueries extends BaseCin7SDK {
  async list<T>(options?: {
    CarrierID?: string;
    Description?: string;
    limit?: number;
    page?: number;
  }): Promise<T> {
    return this.get<T>("ref/Carier", options);
  }
}
