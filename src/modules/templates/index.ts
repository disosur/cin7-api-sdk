import { TemplatesQueries } from './queries';
    import { TemplatesMutations } from './mutations';

    export class TemplatesModule {
      public queries: TemplatesQueries;
      public mutations: TemplatesMutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new TemplatesQueries(accountId, applicationKey);
        this.mutations = new TemplatesMutations(accountId, applicationKey);
      }
    }

    export { TemplatesQueries, TemplatesMutations };