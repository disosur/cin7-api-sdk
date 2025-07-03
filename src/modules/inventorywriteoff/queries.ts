import { BaseCin7SDK } from "../../core/base-sdk";

export class InventoryWriteoffQueries extends BaseCin7SDK {
  async getInventoryWriteoffList<T>(options?: {
    Search?: string;
    Limit?: number;
    Page?: number;
    Status?: string;
  }): Promise<T> {
    return this.get<T>("inventorywriteoffList", options);
  }

  async getInventoryWriteoff<T>(options?: { TaskID: string }): Promise<T> {
    return this.get<T>("inventorywriteoff", options);
  }
}
