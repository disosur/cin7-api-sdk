import { SalesQueries } from './queries';
import { SalesMutations } from './mutations';

export class SalesModule {
  public queries: SalesQueries;
  public mutations: SalesMutations;

  constructor(accountId: string, applicationKey: string) {
    this.queries = new SalesQueries(accountId, applicationKey);
    this.mutations = new SalesMutations(accountId, applicationKey);
  }
}

export { SalesQueries, SalesMutations };