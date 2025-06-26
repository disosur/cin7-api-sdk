import { ReferenceQueries } from './queries';
export class ReferenceModule {
    constructor(accountId, applicationKey) {
        this.queries = new ReferenceQueries(accountId, applicationKey);
    }
}
export { ReferenceQueries };
//# sourceMappingURL=index.js.map