import { FinishedGoodsQueries } from './queries';
    import { FinishedGoodsMutations } from './mutations';

    export class FinishedGoodsModule {
      public queries: FinishedGoodsQueries;
      public mutations: FinishedGoodsMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new FinishedGoodsQueries(accountId, applicationKey);
        this.mutations = new FinishedGoodsMutations(accountId, applicationKey);
      }
    }

    export { FinishedGoodsQueries, FinishedGoodsMutations };