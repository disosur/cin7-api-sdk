import { BaseCin7SDK } from "../../core/base-sdk";

interface createCarrierPayload {
  Description: string;
}

interface editCarrierPayload {
  CarrierID: string;
  Desctiption: string;
}

export class CarierMutations extends BaseCin7SDK {
  async create<T>(data: createCarrierPayload): Promise<T> {
    return this.post<T>("ref/Carier", data);
  }

  async update<T>(id: string, data: editCarrierPayload): Promise<T> {
    return this.put<T>(`ref/Carier`, data);
  }

  async delete<T>(id: string): Promise<T> {
    return this.delete<T>(`ref/Carier?ID=${id}`);
  }
}
