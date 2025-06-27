import { MeQueries } from './queries';
    import { MeMutations } from './mutations';

    export class MeModule {
      public queries: MeQueries;
      public mutations: MeMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new MeQueries(accountId, applicationKey);
        this.mutations = new MeMutations(accountId, applicationKey);
      }
    }

    export { MeQueries, MeMutations };