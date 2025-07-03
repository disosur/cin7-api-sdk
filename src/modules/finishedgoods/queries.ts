import { BaseCin7SDK } from "../../core/base-sdk";

export class FinishedGoodsQueries extends BaseCin7SDK {
  async getFinishedGoodslist<T>(options?: {
    Search?: string;
    Status?: string;
    SaleID?: string;
    Limit?: number;
    Page?: number;
  }): Promise<T> {
    return this.get<T>("finishedGoodsList", options);
  }

  async getFinishedGoods<T>(options?: { TaskID: string }): Promise<T> {
    return this.get<T>("finishedGoods", options);
  }

  async getFinishedGoodsOrder<T>(options?: { TaskID: string }): Promise<T> {
    return this.get<T>("finishedGoods/order", options);
  }

  async getFinishedGoodsPick<T>(options?: { TaskID: string }): Promise<T> {
    return this.get<T>("finishedGoods/pick", options);
  }
}
