import { BaseCin7SDK } from "../../core/base-sdk";

export class BankAccountsQueries extends BaseCin7SDK {
  async list<T>(options?: {
    ID?: string;
    Name?: string;
    Bank?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("bankaccounts", options);
  }
}
