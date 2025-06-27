import { FixedAssetTypeQueries } from './queries';
    import { FixedAssetTypeMutations } from './mutations';

    export class FixedAssetTypeModule {
      public queries: FixedAssetTypeQueries;
      public mutations: FixedAssetTypeMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new FixedAssetTypeQueries(accountId, applicationKey);
        this.mutations = new FixedAssetTypeMutations(accountId, applicationKey);
      }
    }

    export { FixedAssetTypeQueries, FixedAssetTypeMutations };