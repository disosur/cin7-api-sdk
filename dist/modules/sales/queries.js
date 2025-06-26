import { BaseCin7SDK } from '../../core/base-sdk';
export class SalesQueries extends BaseCin7SDK {
    async getSales(options) {
        return this.get('sale', options);
    }
    async getSale(id) {
        return this.get(`sale/${id}`);
    }
}
//# sourceMappingURL=queries.js.map