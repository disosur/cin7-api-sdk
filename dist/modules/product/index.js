import { ProductQueries } from './queries';
import { ProductMutations } from './mutations';
export class ProductModule {
    constructor(accountId, applicationKey) {
        this.queries = new ProductQueries(accountId, applicationKey);
        this.mutations = new ProductMutations(accountId, applicationKey);
    }
}
export { ProductQueries, ProductMutations };
//# sourceMappingURL=index.js.map