import { SalesQueries } from './queries';
import { SalesMutations } from './mutations';
export class SalesModule {
    constructor(accountId, applicationKey) {
        this.queries = new SalesQueries(accountId, applicationKey);
        this.mutations = new SalesMutations(accountId, applicationKey);
    }
}
export { SalesQueries, SalesMutations };
//# sourceMappingURL=index.js.map