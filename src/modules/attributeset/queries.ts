import { BaseCin7SDK } from "../../core/base-sdk";

export class AttributeSetQueries extends BaseCin7SDK {
  async list<T>(options?: {
    Limit?: number;
    Page?: number;
    ID?: string;
    Name?: string;
  }): Promise<T> {
    return this.get<T>("ref/attributeset", options);
  }
}
