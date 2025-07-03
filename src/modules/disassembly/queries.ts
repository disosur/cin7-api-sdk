import { BaseCin7SDK } from "../../core/base-sdk";

export class DisassemblyQueries extends BaseCin7SDK {
  async getDisassemblyList<T>(options?: {
    Search?: string;
    Status?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("disassemblyList", options);
  }

  async getDisassembly<T>(options?: { TaskID: string }): Promise<T> {
    return this.get<T>("disassembly", options);
  }

  async getDisassemblyOrder<T>(options?: { TaskID: string }): Promise<T> {
    return this.get<T>("disassembly/order", options);
  }
}
