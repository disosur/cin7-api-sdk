import { ReferencebooksQueries } from './queries';
    import { ReferencebooksMutations } from './mutations';

    export class ReferencebooksModule {
      public queries: ReferencebooksQueries;
      public mutations: ReferencebooksMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new ReferencebooksQueries(accountId, applicationKey);
        this.mutations = new ReferencebooksMutations(accountId, applicationKey);
      }
    }

    export { ReferencebooksQueries, ReferencebooksMutations };