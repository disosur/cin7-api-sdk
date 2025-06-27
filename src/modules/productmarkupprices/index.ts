import { ProductmarkuppricesQueries } from './queries';
    import { ProductmarkuppricesMutations } from './mutations';

    export class ProductmarkuppricesModule {
      public queries: ProductmarkuppricesQueries;
      public mutations: ProductmarkuppricesMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new ProductmarkuppricesQueries(accountId, applicationKey);
        this.mutations = new ProductmarkuppricesMutations(accountId, applicationKey);
      }
    }

    export { ProductmarkuppricesQueries, ProductmarkuppricesMutations };