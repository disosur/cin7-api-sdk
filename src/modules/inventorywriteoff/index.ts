import { InventoryWriteoffQueries } from './queries';
    import { InventoryWriteoffMutations } from './mutations';

    export class InventoryWriteoffModule {
      public queries: InventoryWriteoffQueries;
      public mutations: InventoryWriteoffMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new InventoryWriteoffQueries(accountId, applicationKey);
        this.mutations = new InventoryWriteoffMutations(accountId, applicationKey);
      }
    }

    export { InventoryWriteoffQueries, InventoryWriteoffMutations };