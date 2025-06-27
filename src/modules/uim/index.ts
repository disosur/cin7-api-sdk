import { UIMQueries } from './queries';
    import { UIMMutations } from './mutations';

    export class UIMModule {
      public queries: UIMQueries;
      public mutations: UIMMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new UIMQueries(accountId, applicationKey);
        this.mutations = new UIMMutations(accountId, applicationKey);
      }
    }

    export { UIMQueries, UIMMutations };