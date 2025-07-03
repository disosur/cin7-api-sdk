import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Payload for creating a new Inventory Write-Off task.
 */
interface CreateInventoryWriteOffPayload {
  /**
   * Inventory Write-Off task status.
   * Required. Allowed values: 'DRAFT', 'COMPLETED'
   */
  Status: "DRAFT" | "COMPLETED";

  /**
   * Location ID.
   * Required if Location is not set.
   */
  LocationID?: string;

  /**
   * Location name.
   * Required if LocationID is not set.
   */
  Location?: string;

  /**
   * Expense account code.
   * Required.
   */
  Account: string;

  /**
   * Effective date of write-off.
   * Required if Status is 'COMPLETED'.
   * Format: 'YYYY-MM-DDTHH:mm:ss'
   */
  EffectiveDate?: string;

  /**
   * Notes or remarks.
   */
  Notes?: string;

  /**
   * List of product write-off lines.
   */
  Lines: InventoryWriteOffLine[];
}

/**
 * Payload for editing an existing Inventory Write-Off task.
 */
interface EditInventoryWriteOffPayload extends CreateInventoryWriteOffPayload {
  /**
   * Unique Task ID.
   * Required.
   */
  TaskID: string;
}

/**
 * Line model for a product in Inventory Write-Off.
 */
interface InventoryWriteOffLine {
  /**
   * Product ID.
   */
  ProductID: string;

  /**
   * Product code.
   */
  ProductCode: string;

  /**
   * Product name.
   */
  Name: string;

  /**
   * Bin ID where the item is located (optional).
   */
  BinID?: string | null;

  /**
   * Bin name (optional).
   */
  Bin?: string | null;

  /**
   * Batch serial number (optional).
   */
  BatchSN?: string | null;

  /**
   * Expiry date (optional).
   * Format: 'YYYY-MM-DDTHH:mm:ss'
   */
  ExpiryDate?: string | null;

  /**
   * Expense account (can be empty or null).
   */
  ExpenseAccount?: string | null;

  /**
   * Quantity of the item to be written off.
   */
  Quantity: number;

  /**
   * Cost per item. Can be negative for credit adjustments.
   */
  Cost: number;
}

export class InventoryWriteoffMutations extends BaseCin7SDK {
  async create<T>(data: CreateInventoryWriteOffPayload): Promise<T> {
    return this.post<T>("inventorywriteoff", data);
  }

  async update<T>(data: EditInventoryWriteOffPayload): Promise<T> {
    return this.put<T>("inventorywriteoff", data);
  }

  async delete<T>(id: string, Void?: boolean): Promise<T> {
    return this.delete<T>(`inventorywriteoff?ID=${id}&Void=${Void}`);
  }
}
