import { ProductModule } from "./modules/product";
import { CustomerModule } from "./modules/customer";
import { SalesModule } from "./modules/sales";
import { PurchaseModule } from "./modules/purchase";
import { ReferenceModule } from "./modules/reference";
import { StockModule } from "./modules/stock";
import { BankAccountsModule } from "./modules/bankaccounts";
import { AttributeSetModule } from "./modules/attributeset";
import { BrandModule } from "./modules/brand";
import { ChartofaccountsModule } from "./modules/chartofaccounts";
import { CrmModule } from "./modules/crm";
import { DisassemblyModule } from "./modules/disassembly";
import { FinishedGoodsModule } from "./modules/finishedgoods";
import { FixedAssetTypeModule } from "./modules/fixedassettype";
import { InventoryWriteoffModule } from "./modules/inventorywriteoff";
import { JournalModule } from "./modules/journal";
import { LocationModule } from "./modules/location";
import { MeModule } from "./modules/me";
import { MoneytaskModule } from "./modules/moneytask";
import { PaymenttermModule } from "./modules/paymentterm";
import { PricetiersModule } from "./modules/pricetiers";
import { ProductcategoriesModule } from "./modules/productcategories";
import { ProductfamilyModule } from "./modules/productfamily";
import { ProductionModule } from "./modules/production";
import { ProductmarkuppricesModule } from "./modules/productmarkupprices";
import { ReferencebooksModule } from "./modules/referencebooks";
import { SupplierModule } from "./modules/supplier";
import { TaxModule } from "./modules/tax";
import { TemplatesModule } from "./modules/templates";
import { TransactionsModule } from "./modules/transactions";
import { UIMModule } from "./modules/uim";

export class Cin7CoreSDK {
  public product: ProductModule;
  public customer: CustomerModule;
  public sales: SalesModule;
  public purchase: PurchaseModule;
  public reference: ReferenceModule;
  public crm: CrmModule;
  public uim: UIMModule;
  public transactions: TransactionsModule;
  public templates: TemplatesModule;
  public tax: TaxModule;
  public supplier: SupplierModule;
  public referencebooks: ReferencebooksModule;
  public production: ProductionModule;
  public productmarkupprices: ProductmarkuppricesModule;
  public productfamily: ProductfamilyModule;
  public productcategories: ProductcategoriesModule;
  public pricetiers: PricetiersModule;
  public paymentterm: PaymenttermModule;
  public moneytask: MoneytaskModule;
  public me: MeModule;
  public location: LocationModule;
  public journal: JournalModule;
  public inventorywriteoff: InventoryWriteoffModule;
  public fixedassettype: FixedAssetTypeModule;
  public finishedgoods: FinishedGoodsModule;
  public disassembly: DisassemblyModule;
  public chartofaccounts: ChartofaccountsModule;
  public brand: BrandModule;
  public bankaccounts: BankAccountsModule;
  public attributeset: AttributeSetModule;
  public stock: StockModule;

  constructor(accountId: string, applicationKey: string) {
    this.product = new ProductModule(accountId, applicationKey);
    this.customer = new CustomerModule(accountId, applicationKey);
    this.sales = new SalesModule(accountId, applicationKey);
    this.purchase = new PurchaseModule(accountId, applicationKey);
    this.reference = new ReferenceModule(accountId, applicationKey);
    this.crm = new CrmModule(accountId, applicationKey);
    this.uim = new UIMModule(accountId, applicationKey);
    this.transactions = new TransactionsModule(accountId, applicationKey);
    this.templates = new TemplatesModule(accountId, applicationKey);
    this.tax = new TaxModule(accountId, applicationKey);
    this.supplier = new SupplierModule(accountId, applicationKey);
    this.referencebooks = new ReferencebooksModule(accountId, applicationKey);
    this.production = new ProductionModule(accountId, applicationKey);
    this.productmarkupprices = new ProductmarkuppricesModule(
      accountId,
      applicationKey
    );
    this.productfamily = new ProductfamilyModule(accountId, applicationKey);
    this.productcategories = new ProductcategoriesModule(
      accountId,
      applicationKey
    );
    this.pricetiers = new PricetiersModule(accountId, applicationKey);
    this.paymentterm = new PaymenttermModule(accountId, applicationKey);
    this.moneytask = new MoneytaskModule(accountId, applicationKey);
    this.me = new MeModule(accountId, applicationKey);
    this.location = new LocationModule(accountId, applicationKey);
    this.journal = new JournalModule(accountId, applicationKey);
    this.inventorywriteoff = new InventoryWriteoffModule(
      accountId,
      applicationKey
    );
    this.fixedassettype = new FixedAssetTypeModule(accountId, applicationKey);
    this.finishedgoods = new FinishedGoodsModule(accountId, applicationKey);
    this.disassembly = new DisassemblyModule(accountId, applicationKey);
    this.chartofaccounts = new ChartofaccountsModule(accountId, applicationKey);
    this.brand = new BrandModule(accountId, applicationKey);
    this.bankaccounts = new BankAccountsModule(accountId, applicationKey);
    this.attributeset = new AttributeSetModule(accountId, applicationKey);
    this.stock = new StockModule(accountId, applicationKey);
  }
}

export { ProductModule } from "./modules/product";
export { CustomerModule } from "./modules/customer";
export { SalesModule } from "./modules/sales";
export { PurchaseModule } from "./modules/purchase";
export { ReferenceModule } from "./modules/reference";
export { StockModule } from "./modules/stock";
export { BankAccountsModule } from "./modules/bankaccounts";
export { AttributeSetModule } from "./modules/attributeset";
export { BrandModule } from "./modules/brand";
export { ChartofaccountsModule } from "./modules/chartofaccounts";
export { CrmModule } from "./modules/crm";
export { DisassemblyModule } from "./modules/disassembly";
export { FinishedGoodsModule } from "./modules/finishedgoods";
export { FixedAssetTypeModule } from "./modules/fixedassettype";
export { InventoryWriteoffModule } from "./modules/inventorywriteoff";
export { JournalModule } from "./modules/journal";
export { LocationModule } from "./modules/location";
export { MeModule } from "./modules/me";
export { MoneytaskModule } from "./modules/moneytask";
export { PaymenttermModule } from "./modules/paymentterm";
export { PricetiersModule } from "./modules/pricetiers";
export { ProductcategoriesModule } from "./modules/productcategories";
export { ProductfamilyModule } from "./modules/productfamily";
export { ProductionModule } from "./modules/production";
export { ProductmarkuppricesModule } from "./modules/productmarkupprices";
export { ReferencebooksModule } from "./modules/referencebooks";
export { SupplierModule } from "./modules/supplier";
export { TaxModule } from "./modules/tax";
export { TemplatesModule } from "./modules/templates";
export { TransactionsModule } from "./modules/transactions";
export { UIMModule } from "./modules/uim";
export { BaseCin7SDK } from "./core/base-sdk";
export type { HTTPMethod, RequestOptions } from "./core/types";
