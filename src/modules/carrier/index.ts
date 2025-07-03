import { CarierQueries } from "./queries";
import { CarierMutations } from "./mutations";

export class CarierModule {
  public queries: CarierQueries;
  public mutations: CarierMutations;

  constructor(accountId: string, applicationKey: string) {
    this.queries = new CarierQueries(accountId, applicationKey);
    this.mutations = new CarierMutations(accountId, applicationKey);
  }
}

export { CarierQueries, CarierMutations };
