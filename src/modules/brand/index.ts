import { BrandQueries } from './queries';
    import { BrandMutations } from './mutations';

    export class BrandModule {
      public queries: BrandQueries;
      public mutations: BrandMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new BrandQueries(accountId, applicationKey);
        this.mutations = new BrandMutations(accountId, applicationKey);
      }
    }

    export { BrandQueries, BrandMutations };