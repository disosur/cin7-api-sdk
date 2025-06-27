import { TransactionsQueries } from './queries';
    import { TransactionsMutations } from './mutations';

    export class TransactionsModule {
      public queries: TransactionsQueries;
      public mutations: TransactionsMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new TransactionsQueries(accountId, applicationKey);
        this.mutations = new TransactionsMutations(accountId, applicationKey);
      }
    }

    export { TransactionsQueries, TransactionsMutations };