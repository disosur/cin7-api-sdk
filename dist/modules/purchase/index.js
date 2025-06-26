import { PurchaseQueries } from './queries';
import { PurchaseMutations } from './mutations';
export class PurchaseModule {
    constructor(accountId, applicationKey) {
        this.queries = new PurchaseQueries(accountId, applicationKey);
        this.mutations = new PurchaseMutations(accountId, applicationKey);
    }
}
export { PurchaseQueries, PurchaseMutations };
//# sourceMappingURL=index.js.map