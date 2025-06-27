import { JournalQueries } from './queries';
    import { JournalMutations } from './mutations';

    export class JournalModule {
      public queries: JournalQueries;
      public mutations: JournalMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new JournalQueries(accountId, applicationKey);
        this.mutations = new JournalMutations(accountId, applicationKey);
      }
    }

    export { JournalQueries, JournalMutations };