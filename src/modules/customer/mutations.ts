import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Address associated with a customer.
 */
interface CustomerAddress {
  ID?: string;
  CustomerID?: string;
  Line1: string;
  Line2?: string;
  City: string;
  State: string;
  Postcode: string;
  Country: string;
  /**
   * Type of address. E.g., 'Business', 'Billing', etc.
   */
  Type: string;
  /**
   * Marks if this address is the default for its type.
   */
  DefaultForType?: boolean;
}

/**
 * Contact associated with a customer.
 */
interface CustomerContact {
  ID?: string;
  CustomerID?: string;
  Name: string;
  JobTitle?: string | null;
  Phone?: string;
  MobilePhone?: string | null;
  Fax?: string;
  Email?: string;
  Website?: string | null;
  /**
   * Marks this as the default contact.
   */
  Default?: boolean;
  /**
   * Internal notes or comments.
   */
  Comment?: string | null;
  /**
   * Whether to include this contact in emails.
   */
  IncludeInEmail?: boolean;
}

/**
 * Payload for creating a Customer.
 */
interface createCustomerPayload {
  /**
   * Name of the customer. (Max 256 characters)
   * Required.
   */
  Name: string;

  /**
   * Status of the customer.
   * Required for POST.
   * Allowed values: 'Active', 'Deprecated'
   */
  Status: "Active" | "Deprecated";

  /**
   * Currency code for the customer.
   * Required.
   */
  Currency: string;

  /**
   * Payment term of the customer.
   * Required.
   */
  PaymentTerm: string;

  /**
   * Discount percentage (0–100).
   * Optional.
   */
  Discount?: number;

  /**
   * Tax rule name.
   * Required.
   */
  TaxRule: string;

  /**
   * Carrier name.
   * Optional.
   */
  Carrier?: string;

  /**
   * Sales representative name.
   * Optional.
   */
  SalesRepresentative?: string | null;

  /**
   * Location name.
   * Optional.
   */
  Location?: string;

  /**
   * Additional comments. (Max 2000 characters)
   * Optional.
   */
  Comments?: string | null;

  /**
   * Code of the accounts receivable account.
   * Required.
   */
  AccountReceivable: string;

  /**
   * Code of the revenue (sales) account.
   * Required.
   */
  RevenueAccount: string;

  /**
   * Price tier.
   * Optional.
   */
  PriceTier?: string;

  /**
   * Customer’s tax number.
   * Optional.
   */
  TaxNumber?: number | null;

  /**
   * Optional custom attributes (1 to 10).
   */
  AdditionalAttribute1?: string | null;
  AdditionalAttribute2?: string | null;
  AdditionalAttribute3?: string | null;
  AdditionalAttribute4?: string | null;
  AdditionalAttribute5?: string | null;
  AdditionalAttribute6?: string | null;
  AdditionalAttribute7?: string | null;
  AdditionalAttribute8?: string | null;
  AdditionalAttribute9?: string | null;
  AdditionalAttribute10?: string | null;

  /**
   * Name of the Attribute Set applied.
   * Optional.
   */
  AttributeSet?: string | null;

  /**
   * Tags for the customer.
   * Optional.
   */
  Tags?: string | null;

  /**
   * Whether the customer is on credit hold.
   * Optional.
   */
  IsOnCreditHold?: boolean;

  /**
   * List of customer addresses.
   */
  Addresses?: CustomerAddress[];

  /**
   * List of customer contacts.
   */
  Contacts?: CustomerContact[];
}

/**
 * Payload for updating a Customer.
 */
interface editCustomerPayload extends createCustomerPayload {
  /**
   * Unique ID of the customer.
   * Required for PUT.
   */
  ID: string;
}

/**
 * Represents the payload for assigning templates to a customer.
 */
interface CustomerTemplateAssignmentCreatePayload {
  /**
   * A list of customer-template assignment entries.
   */
  CustomerTemplates: CustomerTemplateAssignment[];
}

/**
 * A single mapping between a customer and a template.
 */
interface CustomerTemplateAssignment {
  /**
   * Unique identifier of the customer.
   * Required.
   */
  CustomerID: string;

  /**
   * Unique identifier of the template.
   * Required.
   */
  TemplateID: string;
}

export class CustomerMutations extends BaseCin7SDK {
  async createCustomer<T>(customerData: createCustomerPayload): Promise<T> {
    return this.post<T>("ref/customer", customerData);
  }

  async updateCustomer<T>(customerData: editCustomerPayload): Promise<T> {
    return this.put<T>(`ref/customer`, customerData);
  }

  async deleteCustomer<T>(id: string): Promise<T> {
    return this.delete<T>(`ref/customer/${id}`);
  }

  async createCustomerTemplate<T>(
    customerData: CustomerTemplateAssignmentCreatePayload
  ): Promise<T> {
    return this.post<T>("ref/customer/templates", customerData);
  }

  async deleteCustomerTemplate<T>(
    templateId: string,
    CustomerId: string
  ): Promise<T> {
    return this.delete<T>(
      `ref/customer/templates?TemplateId=${templateId}&CustomerId=${CustomerId}`
    );
  }
}
