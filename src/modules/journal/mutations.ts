import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Payload for creating a new Journal entry.
 */
interface CreateJournalPayload {
  /**
   * Journal Status.
   * Required. Allowed values: 'DRAFT', 'COMPLETED'
   */
  Status: "DRAFT" | "COMPLETED";

  /**
   * Currency code.
   * Required.
   */
  Currency: string;

  /**
   * Conversion rate from tenant currency to the selected currency.
   * Required.
   */
  CurrencyConversionRate: number;

  /**
   * Effective date of the journal entry.
   * Required.
   * Format: 'YYYY-MM-DDTHH:mm:ss'
   */
  EffectiveDate: string;

  /**
   * Optional narration text.
   */
  Narration?: string | null;

  /**
   * Optional notes.
   */
  Notes?: string | null;

  /**
   * List of journal lines (debit/credit entries).
   * Required.
   */
  Lines: JournalLine[];
}

/**
 * Payload for editing an existing Journal entry.
 */
interface EditJournalPayload extends CreateJournalPayload {
  /**
   * Unique ID of the journal task.
   * Required.
   */
  TaskID: string;
}

/**
 * Journal line item (debit/credit entry).
 */
interface JournalLine {
  /**
   * Debit account code.
   */
  Debit: string;

  /**
   * Credit account code.
   */
  Credit: string;

  /**
   * Reference or memo.
   */
  Reference?: string;

  /**
   * Amount in foreign currency.
   */
  Amount: number;

  /**
   * Base amount in tenant currency.
   */
  BaseAmount: number;
}

export class JournalMutations extends BaseCin7SDK {
  async create<T>(data: CreateJournalPayload): Promise<T> {
    return this.post<T>("journal", data);
  }

  async update<T>(data: EditJournalPayload): Promise<T> {
    return this.put<T>("journal", data);
  }

  async delete<T>(id: string, Void?: boolean): Promise<T> {
    return this.delete<T>(`journal?ID=${id}&Void=${Void}`);
  }
}
