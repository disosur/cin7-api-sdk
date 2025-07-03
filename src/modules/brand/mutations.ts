import { BaseCin7SDK } from "../../core/base-sdk";

interface createBrandPayload {
  Name: string;
}

interface editBrandPayload {
  ID: string;
  Name: string;
}

export class BrandMutations extends BaseCin7SDK {
  async create<T>(data: createBrandPayload): Promise<T> {
    return this.post<T>("brand", data);
  }

  async update<T>(id: string, data: editBrandPayload): Promise<T> {
    return this.put<T>(`brand/${id}`, data);
  }

  async delete<T>(id: string): Promise<T> {
    return this.delete<T>(`brand?ID=${id}`);
  }
}
