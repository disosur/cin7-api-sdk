import { ProductQueries } from './queries';
import { ProductMutations } from './mutations';

export class ProductModule {
  public queries: ProductQueries;
  public mutations: ProductMutations;

  constructor(accountId: string, applicationKey: string) {
    this.queries = new ProductQueries(accountId, applicationKey);
    this.mutations = new ProductMutations(accountId, applicationKey);
  }
}

export { ProductQueries, ProductMutations };