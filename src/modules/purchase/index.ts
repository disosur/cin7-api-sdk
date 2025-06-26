import { PurchaseQueries } from './queries';
import { PurchaseMutations } from './mutations';

export class PurchaseModule {
  public queries: PurchaseQueries;
  public mutations: PurchaseMutations;

  constructor(accountId: string, applicationKey: string) {
    this.queries = new PurchaseQueries(accountId, applicationKey);
    this.mutations = new PurchaseMutations(accountId, applicationKey);
  }
}

export { PurchaseQueries, PurchaseMutations };