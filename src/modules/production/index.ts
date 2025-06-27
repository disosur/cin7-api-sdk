import { ProductionQueries } from './queries';
    import { ProductionMutations } from './mutations';

    export class ProductionModule {
      public queries: ProductionQueries;
      public mutations: ProductionMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new ProductionQueries(accountId, applicationKey);
        this.mutations = new ProductionMutations(accountId, applicationKey);
      }
    }

    export { ProductionQueries, ProductionMutations };