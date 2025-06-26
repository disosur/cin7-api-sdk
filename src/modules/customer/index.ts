import { CustomerQueries } from './queries';
import { CustomerMutations } from './mutations';

export class CustomerModule {
  public queries: CustomerQueries;
  public mutations: CustomerMutations;

  constructor(accountId: string, applicationKey: string) {
    this.queries = new CustomerQueries(accountId, applicationKey);
    this.mutations = new CustomerMutations(accountId, applicationKey);
  }
}

export { CustomerQueries, CustomerMutations };