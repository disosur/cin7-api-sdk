import { PaymenttermQueries } from './queries';
    import { PaymenttermMutations } from './mutations';

    export class PaymenttermModule {
      public queries: PaymenttermQueries;
      public mutations: PaymenttermMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new PaymenttermQueries(accountId, applicationKey);
        this.mutations = new PaymenttermMutations(accountId, applicationKey);
      }
    }

    export { PaymenttermQueries, PaymenttermMutations };