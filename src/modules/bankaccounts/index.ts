import { BankAccountsQueries } from './queries';
    import { BankAccountsMutations } from './mutations';

    export class BankAccountsModule {
      public queries: BankAccountsQueries;
      public mutations: BankAccountsMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new BankAccountsQueries(accountId, applicationKey);
        this.mutations = new BankAccountsMutations(accountId, applicationKey);
      }
    }

    export { BankAccountsQueries, BankAccountsMutations };