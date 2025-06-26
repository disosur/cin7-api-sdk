import { ProductModule } from './modules/product';
import { CustomerModule } from './modules/customer';
import { SalesModule } from './modules/sales';
import { PurchaseModule } from './modules/purchase';
import { ReferenceModule } from './modules/reference';
export class Cin7CoreSDK {
    constructor(accountId, applicationKey) {
        this.product = new ProductModule(accountId, applicationKey);
        this.customer = new CustomerModule(accountId, applicationKey);
        this.sales = new SalesModule(accountId, applicationKey);
        this.purchase = new PurchaseModule(accountId, applicationKey);
        this.reference = new ReferenceModule(accountId, applicationKey);
    }
}
export { ProductModule } from './modules/product';
export { CustomerModule } from './modules/customer';
export { SalesModule } from './modules/sales';
export { PurchaseModule } from './modules/purchase';
export { ReferenceModule } from './modules/reference';
export { BaseCin7SDK } from './core/base-sdk';
//# sourceMappingURL=index.js.map