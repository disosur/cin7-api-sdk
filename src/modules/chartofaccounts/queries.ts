import { BaseCin7SDK } from "../../core/base-sdk";

export class ChartofaccountsQueries extends BaseCin7SDK {
  async list<T>(options?: {
    Code?: string;
    Name?: string;
    Type?: string;
    Status?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("chartofaccounts", options);
  }
}
