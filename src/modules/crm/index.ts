import { CrmQueries } from './queries';
    import { CrmMutations } from './mutations';

    export class CrmModule {
      public queries: CrmQueries;
      public mutations: CrmMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new CrmQueries(accountId, applicationKey);
        this.mutations = new CrmMutations(accountId, applicationKey);
      }
    }

    export { CrmQueries, CrmMutations };