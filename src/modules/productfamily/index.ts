import { ProductfamilyQueries } from './queries';
    import { ProductfamilyMutations } from './mutations';

    export class ProductfamilyModule {
      public queries: ProductfamilyQueries;
      public mutations: ProductfamilyMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new ProductfamilyQueries(accountId, applicationKey);
        this.mutations = new ProductfamilyMutations(accountId, applicationKey);
      }
    }

    export { ProductfamilyQueries, ProductfamilyMutations };