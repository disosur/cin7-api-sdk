import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Interface for creating or updating an Account via API.
 */
interface AccountPayload {
  /**
   * Unique code of the Account (max 50 characters).
   * Required.
   */
  Code: string;

  /**
   * Name of the Account (max 256 characters).
   * Required.
   */
  Name: string;

  /**
   * Status of the Account.
   * Required.
   */
  Status: string;

  /**
   * Type of the Account.
   * Required.
   * Allowed values: 'BANK', 'CURRLIAB', 'LIABILITY', 'TERMLIA', 'PAYGLIABILITY',
   * 'SUPERANNUATIONLIABILITY', 'WAGESPAYABLELIABILITY'
   */
  Type:
    | "BANK"
    | "CURRLIAB"
    | "LIABILITY"
    | "TERMLIA"
    | "PAYGLIABILITY"
    | "SUPERANNUATIONLIABILITY"
    | "WAGESPAYABLELIABILITY";

  /**
   * Optional description of the Account.
   */
  Description?: string;

  /**
   * Class of the Account.
   * Optional.
   * Allowed values: 'ASSET', 'LIABILITY', 'EXPENSE', 'EQUITY', 'REVENUE'
   */
  Class?: "ASSET" | "LIABILITY" | "EXPENSE" | "EQUITY" | "REVENUE";

  /**
   * System Account type.
   * Optional for POST (create).
   * Read-only for PUT (edit).
   * Allowed values: 'BANKCURRENCYGAIN', 'CREDITORS', 'DEBTORS', 'GST', 'GSTONIMPORTS',
   * 'HISTORICAL', 'REALISEDCURRENCYGAIN', 'RETAINEDEARNINGS', 'ROUNDING', 'TRACKINGTRANSFERS',
   * 'UNPAIDEXPCLM', 'UNREALISEDCURRENCYGAIN', 'WAGEPAYABLES'
   */
  SystemAccount?:
    | "BANKCURRENCYGAIN"
    | "CREDITORS"
    | "DEBTORS"
    | "GST"
    | "GSTONIMPORTS"
    | "HISTORICAL"
    | "REALISEDCURRENCYGAIN"
    | "RETAINEDEARNINGS"
    | "ROUNDING"
    | "TRACKINGTRANSFERS"
    | "UNPAIDEXPCLM"
    | "UNREALISEDCURRENCYGAIN"
    | "WAGEPAYABLES";

  /**
   * Only for Type = 'BANK'. Required if Type is 'BANK'.
   */
  Bank?: string;

  /**
   * Bank Account Number.
   * Required only if Type is 'BANK'.
   */
  BankAccountNumber?: string;
}

export class ChartofaccountsMutations extends BaseCin7SDK {
  async create<T>(data: AccountPayload): Promise<T> {
    return this.post<T>("chartofaccounts", data);
  }

  async update<T>(data: AccountPayload): Promise<T> {
    return this.put<T>(`chartofaccounts`, data);
  }

  async delete<T>(code: string): Promise<T> {
    return this.delete<T>(`chartofaccounts?Code=${code}`);
  }
}
