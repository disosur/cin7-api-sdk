import { TaxQueries } from './queries';
    import { TaxMutations } from './mutations';

    export class TaxModule {
      public queries: TaxQueries;
      public mutations: TaxMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new TaxQueries(accountId, applicationKey);
        this.mutations = new TaxMutations(accountId, applicationKey);
      }
    }

    export { TaxQueries, TaxMutations };