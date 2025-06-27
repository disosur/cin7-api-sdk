import { ProductcategoriesQueries } from './queries';
    import { ProductcategoriesMutations } from './mutations';

    export class ProductcategoriesModule {
      public queries: ProductcategoriesQueries;
      public mutations: ProductcategoriesMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new ProductcategoriesQueries(accountId, applicationKey);
        this.mutations = new ProductcategoriesMutations(accountId, applicationKey);
      }
    }

    export { ProductcategoriesQueries, ProductcategoriesMutations };