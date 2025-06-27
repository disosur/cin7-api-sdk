import { AttributeSetQueries } from './queries';
    import { AttributeSetMutations } from './mutations';

    export class AttributeSetModule {
      public queries: AttributeSetQueries;
      public mutations: AttributeSetMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new AttributeSetQueries(accountId, applicationKey);
        this.mutations = new AttributeSetMutations(accountId, applicationKey);
      }
    }

    export { AttributeSetQueries, AttributeSetMutations };