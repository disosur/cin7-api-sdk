import { DisassemblyQueries } from './queries';
    import { DisassemblyMutations } from './mutations';

    export class DisassemblyModule {
      public queries: DisassemblyQueries;
      public mutations: DisassemblyMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new DisassemblyQueries(accountId, applicationKey);
        this.mutations = new DisassemblyMutations(accountId, applicationKey);
      }
    }

    export { DisassemblyQueries, DisassemblyMutations };