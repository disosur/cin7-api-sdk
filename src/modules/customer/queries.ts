import { BaseCin7SDK } from "../../core/base-sdk";

export class CustomerQueries extends BaseCin7SDK {
  async getCustomers<T>(options?: {
    ID?: string;
    Name?: string;
    ContactFilter?: string;
    ModifiedSince?: string;
    IncludeDeprecated?: boolean;
    IncludeProductPrices?: boolean;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("ref/customer", options);
  }

  async getCustomersTemplate<T>(options?: {
    CustomerId?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("ref/customer/templates", options);
  }

  async getCustomersCredits<T>(options?: {
    CustomerId?: string;
    ShowUsedCredits?: boolean;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("ref/customer/templates", options);
  }
}
