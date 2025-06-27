import { LocationQueries } from './queries';
    import { LocationMutations } from './mutations';

    export class LocationModule {
      public queries: LocationQueries;
      public mutations: LocationMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new LocationQueries(accountId, applicationKey);
        this.mutations = new LocationMutations(accountId, applicationKey);
      }
    }

    export { LocationQueries, LocationMutations };