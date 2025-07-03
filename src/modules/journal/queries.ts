import { BaseCin7SDK } from "../../core/base-sdk";

export class JournalQueries extends BaseCin7SDK {
  async getJournal<T>(options?: {
    Search?: string;
    Status?: string;
    TaskID?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("journal", options);
  }
}
