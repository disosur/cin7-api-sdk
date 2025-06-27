import { StockQueries } from './queries';
    import { StockMutations } from './mutations';

    export class StockModule {
      public queries: StockQueries;
      public mutations: StockMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new StockQueries(accountId, applicationKey);
        this.mutations = new StockMutations(accountId, applicationKey);
      }
    }

    export { StockQueries, StockMutations };