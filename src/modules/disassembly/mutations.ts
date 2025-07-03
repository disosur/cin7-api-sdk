import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Payload for creating a Disassembly Task.
 */
interface CreateDisassemblyPayload {
  /**
   * Status of the disassembly task.
   * Required.
   * Allowed values: 'DRAFT', 'AUTHORISED', 'IN PROGRESS', 'COMPLETED'
   *
   * - WORK IN PROGRESS: Task will be created and system will try to auto-add pick items.
   * - COMPLETED: Task will be created and system will try to auto-add pick items, order items, and complete the task.
   */
  Status: "DRAFT" | "AUTHORISED" | "IN PROGRESS" | "COMPLETED";

  /**
   * Product ID.
   * Required if ProductCode is not provided.
   */
  ProductID?: string;

  /**
   * Product code.
   * Required if ProductID is not provided.
   */
  ProductCode?: string;

  /**
   * Name of the product.
   * Optional.
   */
  ProductName?: string;

  /**
   * Location ID.
   * Required if Location is not provided.
   */
  LocationID?: string;

  /**
   * Location name.
   * Required if LocationID is not provided.
   */
  Location?: string;

  /**
   * Date when disassembly was completed (ISO 8601 format).
   * Optional.
   */
  CompletionDate?: string;

  /**
   * Work in Progress account code.
   * Required.
   */
  WIPAccount: string;

  /**
   * Quantity of the product being disassembled.
   * Required.
   */
  Quantity: number;
}

/**
 * Payload for posting output (finished goods and services) to a Disassembly Task.
 */
interface CreateDisassemblyOrderPayload {
  /**
   * Unique ID of the disassembly task.
   * Required.
   */
  TaskID: string;

  /**
   * Status of the disassembly task.
   * Required.
   * Allowed values for POST: 'WORK IN PROGRESS', 'COMPLETED'
   */
  Status: "WORK IN PROGRESS" | "COMPLETED";

  /**
   * Completion date of the disassembly task (ISO 8601 format).
   * Optional.
   */
  CompletionDate?: string;

  /**
   * Output product lines resulting from disassembly.
   * Optional.
   */
  OrderLines?: DisassemblyOrderLine[];

  /**
   * Output service lines resulting from disassembly.
   * Optional.
   */
  OrderServiceLines?: DisassemblyOrderServiceLine[];
}

/**
 * A product output line in a disassembly task.
 */
interface DisassemblyOrderLine {
  /**
   * ID of the product.
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
   * Bin ID where the product will be placed.
   * Optional.
   */
  BinID?: string | null;

  /**
   * Bin name.
   * Optional.
   */
  Bin?: string | null;

  /**
   * Unit of measure (e.g., 'Item').
   * Optional.
   */
  Unit?: string;

  /**
   * Batch or serial number, if applicable.
   * Optional.
   */
  BatchSN?: string | null;

  /**
   * Expiry date for the batch or item (ISO format).
   * Optional.
   */
  ExpiryDate?: string | null;

  /**
   * Account to credit the cost of this item to.
   * Required.
   */
  Account: string;

  /**
   * Quantity of the item produced.
   * Required.
   */
  Quantity: number;

  /**
   * Unit cost of the item.
   * Required.
   */
  Cost: number;
}

/**
 * A service output line in a disassembly task.
 */
interface DisassemblyOrderServiceLine {
  /**
   * ID of the service product.
   * Required.
   */
  ProductID: string;

  /**
   * Service name.
   * Optional.
   */
  Name?: string;

  /**
   * Account to credit the cost of the service to.
   * Required.
   */
  Account: string;

  /**
   * Description or note.
   * Optional.
   */
  Comments?: string;

  /**
   * Amount charged for the service.
   * Required.
   */
  Amount: number;
}

export class DisassemblyMutations extends BaseCin7SDK {
  async createDisassembly<T>(data: CreateDisassemblyPayload): Promise<T> {
    return this.post<T>("disassembly", data);
  }

  async createDisassemblyOrder<T>(
    data: CreateDisassemblyOrderPayload
  ): Promise<T> {
    return this.post<T>("disassembly/order", data);
  }

  async deleteDisassembly<T>(id: string, Void?: boolean): Promise<T> {
    return this.delete<T>(`disassembly?ID=${id}&Void=${Void}`);
  }
}
