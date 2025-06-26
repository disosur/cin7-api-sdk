import { CustomerQueries } from './queries';
import { CustomerMutations } from './mutations';
export class CustomerModule {
    constructor(accountId, applicationKey) {
        this.queries = new CustomerQueries(accountId, applicationKey);
        this.mutations = new CustomerMutations(accountId, applicationKey);
    }
}
export { CustomerQueries, CustomerMutations };
//# sourceMappingURL=index.js.map