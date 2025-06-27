import { PricetiersQueries } from './queries';
    import { PricetiersMutations } from './mutations';

    export class PricetiersModule {
      public queries: PricetiersQueries;
      public mutations: PricetiersMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new PricetiersQueries(accountId, applicationKey);
        this.mutations = new PricetiersMutations(accountId, applicationKey);
      }
    }

    export { PricetiersQueries, PricetiersMutations };