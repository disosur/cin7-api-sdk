import { ChartofaccountsQueries } from './queries';
    import { ChartofaccountsMutations } from './mutations';

    export class ChartofaccountsModule {
      public queries: ChartofaccountsQueries;
      public mutations: ChartofaccountsMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new ChartofaccountsQueries(accountId, applicationKey);
        this.mutations = new ChartofaccountsMutations(accountId, applicationKey);
      }
    }

    export { ChartofaccountsQueries, ChartofaccountsMutations };