import { SupplierQueries } from './queries';
    import { SupplierMutations } from './mutations';

    export class SupplierModule {
      public queries: SupplierQueries;
      public mutations: SupplierMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new SupplierQueries(accountId, applicationKey);
        this.mutations = new SupplierMutations(accountId, applicationKey);
      }
    }

    export { SupplierQueries, SupplierMutations };