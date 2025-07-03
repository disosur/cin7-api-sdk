import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Payload for creating a Finished Goods task.
 */
interface CreateFinishedGoodsPayload {
  /**
   * Status of the finished goods task.
   * Required.
   * Allowed: 'DRAFT', 'AUTHORISED', 'IN PROGRESS', 'COMPLETED'
   */
  Status: "DRAFT" | "AUTHORISED" | "IN PROGRESS" | "COMPLETED";

  /**
   * Product ID — required if ProductCode is not provided.
   */
  ProductID?: string;

  /**
   * Product Code — required if ProductID is not provided.
   */
  ProductCode?: string;

  /**
   * Product name. Optional.
   */
  ProductName?: string;

  /**
   * Location ID — required if Location is not provided.
   */
  LocationID?: string;

  /**
   * Location name — required if LocationID is not provided.
   */
  Location?: string;

  /**
   * Bin ID. Optional.
   */
  BinID?: string;

  /**
   * Bin name. Optional.
   */
  Bin?: string;

  /**
   * Work in Progress Account. Required.
   */
  WIPAccount: string;

  /**
   * WIP date. Required if Status is not DRAFT.
   * Format: yyyy-mm-dd
   */
  WIPDate?: string;

  /**
   * Finished Goods Account. Required.
   */
  Account: string;

  /**
   * Quantity to be completed. Required.
   */
  Quantity: number;

  /**
   * Completion date. Required if Status is COMPLETED.
   * Format: yyyy-mm-dd
   */
  CompletionDate?: string;

  /**
   * Batch or serial number. Optional.
   */
  BatchSN?: string;

  /**
   * Expiry date of the batch. Required if costing method is FESN or FEBATCH.
   * Format: yyyy-mm-dd
   */
  ExpiryDate?: string;

  /**
   * Notes or comments.
   */
  Notes?: string;

  /**
   * Custom fields 1–10. Format depends on field type (string/date/number).
   * Max 4 decimal places for numbers.
   */
  CustomField1?: string;
  CustomField2?: string;
  CustomField3?: string;
  CustomField4?: string;
  CustomField5?: string;
  CustomField6?: string;
  CustomField7?: string;
  CustomField8?: string;
  CustomField9?: string;
  CustomField10?: string;
}

/**
 * Payload for editing a Finished Goods task.
 */
interface EditFinishedGoodsPayload extends CreateFinishedGoodsPayload {
  /**
   * Unique ID of the finished goods task.
   * Required for PUT.
   */
  ID: string;
}

/**
 * Payload for creating Finished Goods Order lines for a task.
 */
interface CreateFinishedGoodsOrderPayload {
  /**
   * Unique ID of the Finished Goods task.
   * Required.
   */
  TaskID: string;

  /**
   * Status of the Finished Goods task.
   * Required.
   * Allowed values for POST: 'DRAFT', 'AUTHORISED'
   */
  Status: "DRAFT" | "AUTHORISED";

  /**
   * List of finished goods order lines to include in the task.
   */
  OrderLines: FinishedGoodsOrderLine[];
}

/**
 * A single Finished Goods Order Line entry.
 */
interface FinishedGoodsOrderLine {
  /**
   * ID of the product to be produced.
   * Required.
   */
  ProductID: string;

  /**
   * Product code.
   * Optional.
   */
  ProductCode?: string;

  /**
   * Product name or description.
   * Optional.
   */
  Name?: string;

  /**
   * Expense account associated with the item. Optional.
   */
  ExpenseAccount?: string;

  /**
   * Quantity required for production.
   * Required.
   */
  Quantity: number;

  /**
   * Unit of measure (e.g., 'Item', 'Box'). Optional.
   */
  Unit?: string;

  /**
   * Wastage percent (0–100). Optional.
   */
  WastagePercent?: number;

  /**
   * Wastage quantity in units. Optional.
   */
  WastageQuantity?: number;

  /**
   * Total quantity including wastage. Required.
   */
  TotalQuantity: number;

  /**
   * Total cost of this line item. Required.
   */
  TotalCost: number;
}

/**
 * Payload for creating Pick lines for a Finished Goods task.
 */
interface CreateFinishedGoodsPickPayload {
  /**
   * Unique ID of the Finished Goods task.
   * Required.
   */
  TaskID: string;

  /**
   * Task status.
   * Required.
   * Allowed values for POST: 'AUTHORISED', 'IN PROGRESS', 'COMPLETED'
   */
  Status: "AUTHORISED" | "IN PROGRESS" | "COMPLETED";

  /**
   * Work in Progress account.
   * Optional. Read-only if current task status is not AUTHORISED.
   */
  WIPAccount?: string;

  /**
   * Work in Progress date (yyyy-mm-dd).
   * Optional. Read-only if current task status is not AUTHORISED.
   * If Status is COMPLETED but WIPDate is empty, current date will be used.
   */
  WIPDate?: string;

  /**
   * Finished Goods account.
   * Optional. Read-only if current task status is not AUTHORISED or IN PROGRESS.
   */
  Account?: string;

  /**
   * Completion date (yyyy-mm-dd).
   * Required.
   * Read-only if current task status is not AUTHORISED or IN PROGRESS.
   * If Status is COMPLETED but CompletionDate is empty, current date will be used.
   */
  CompletionDate: string;

  /**
   * Array of Pick Line entries.
   * Optional.
   */
  PickLines?: FinishedGoodsPickLine[];
}

/**
 * A single Pick Line entry for a Finished Goods task.
 */
interface FinishedGoodsPickLine {
  /**
   * Product ID being picked.
   * Required.
   */
  ProductID: string;

  /**
   * Product code.
   * Optional.
   */
  ProductCode?: string;

  /**
   * Product name.
   * Optional.
   */
  Name?: string;

  /**
   * Bin ID from which the product is picked.
   * Optional.
   */
  BinID?: string | null;

  /**
   * Bin name.
   * Optional.
   */
  Bin?: string | null;

  /**
   * Batch or serial number.
   * Optional.
   */
  BatchSN?: string | null;

  /**
   * Expiry date of the batch (yyyy-mm-dd).
   * Optional.
   */
  ExpiryDate?: string | null;

  /**
   * Quantity being picked.
   * Required.
   */
  Quantity: number;

  /**
   * Unit of measure (e.g., 'Item').
   * Optional.
   */
  Unit?: string;

  /**
   * Unit cost of the item.
   * Required.
   */
  Cost: number;
}

export class FinishedGoodsMutations extends BaseCin7SDK {
  async createFinishedGoods<T>(data: CreateFinishedGoodsPayload): Promise<T> {
    return this.post<T>("finishedGoods", data);
  }

  async createFinishedGoodsOrder<T>(
    data: CreateFinishedGoodsOrderPayload
  ): Promise<T> {
    return this.post<T>("finishedGoods/order", data);
  }

  async createFinishedGoodsPick<T>(
    data: CreateFinishedGoodsPickPayload
  ): Promise<T> {
    return this.post<T>("finishedGoods/pick", data);
  }

  async updateFinishedGoods<T>(data: EditFinishedGoodsPayload): Promise<T> {
    return this.put<T>("finishedGoods", data);
  }

  async deleteFinishedGoods<T>(id: string, Void?: boolean): Promise<T> {
    return this.delete<T>(`finishedGoods?ID=${id}&Void=${Void}`);
  }
}
