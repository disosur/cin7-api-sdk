import { MoneytaskQueries } from './queries';
    import { MoneytaskMutations } from './mutations';

    export class MoneytaskModule {
      public queries: MoneytaskQueries;
      public mutations: MoneytaskMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new MoneytaskQueries(accountId, applicationKey);
        this.mutations = new MoneytaskMutations(accountId, applicationKey);
      }
    }

    export { MoneytaskQueries, MoneytaskMutations };