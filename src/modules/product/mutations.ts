import { BaseCin7SDK } from "../../core/base-sdk";

export interface PriceTiers {
  "Tier 1": number;
  "Tier 2": number;
  "Tier 3": number;
  "Tier 4": number;
  "Tier 5": number;
  "Tier 6": number;
  "Tier 7": number;
  "Tier 8": number;
  "Tier 9": number;
  "Tier 10": number;
}

export interface Supplier {
  SupplierID: string;
  SupplierName: string;
  SupplierInventoryCode: string;
  SupplierProductName: string;
  Cost: number;
  FixedCost: number;
  Currency: string;
  DropShip: boolean;
  URL: string;
}

export interface ReorderLevel {
  LocationID: string;
  LocationName: string;
  MinimumBeforeReorder: number;
  ReorderQuantity: number;
  StockLocator: string;
  PickZones: string;
}

export interface BillOfMaterialProduct {
  ComponentProductID: string;
  ProductCode: string;
  Name: string;
  Quantity: number;
  WastagePercent: number;
  WastageQuantity: number;
  CostPercentage: number;
}

export interface BillOfMaterialService {
  ComponentProductID: string;
  Name: string;
  Quantity: number;
  ExpenseAccount: string;
  PriceTier: number;
}

export interface CreateProductData {
  SKU: string;
  Name: string;
  Category: string;
  Brand?: string | null;
  Type: string;
  CostingMethod: string;
  DropShipMode: string;
  DefaultLocation: string;
  Length?: number;
  Width?: number;
  Height?: number;
  Weight?: number;
  UOM: string;
  WeightUnits?: string;
  DimensionsUnits?: string | null;
  Barcode: string;
  MinimumBeforeReorder: number;
  ReorderQuantity: number;
  PriceTier1: number;
  PriceTier2: number;
  PriceTier3: number;
  PriceTier4: number;
  PriceTier5: number;
  PriceTier6: number;
  PriceTier7: number;
  PriceTier8: number;
  PriceTier9: number;
  PriceTier10: number;
  PriceTiers: PriceTiers;
  ShortDescription: string;
  Description: string;
  InternalNote: string;
  AdditionalAttribute1: string;
  AdditionalAttribute2: string;
  AdditionalAttribute3: string;
  AdditionalAttribute4: string;
  AdditionalAttribute5: string;
  AdditionalAttribute6: string;
  AdditionalAttribute7: string;
  AdditionalAttribute8: string;
  AdditionalAttribute9: string;
  AdditionalAttribute10: string;
  AttributeSet?: string | null;
  DiscountRule?: string | null;
  Tags: string;
  Status: string;
  StockLocator: string;
  COGSAccount?: string | null;
  RevenueAccount?: string | null;
  ExpenseAccount?: string | null;
  InventoryAccount?: string | null;
  PurchaseTaxRule?: string | null;
  SaleTaxRule?: string | null;
  Sellable: boolean;
  PickZones: string;
  BillOfMaterial: boolean;
  AutoAssembly: boolean;
  AutoDisassembly: boolean;
  QuantityToProduce: number;
  AssemblyInstructionURL: string;
  AssemblyCostEstimationMethod: string;
  Suppliers: Supplier[];
  ReorderLevels: ReorderLevel[];
  BillOfMaterialsProducts: BillOfMaterialProduct[];
  BillOfMaterialsServices: BillOfMaterialService[];
  CartonHeight: number;
  CartonWidth: number;
  CartonLength: number;
  CartonQuantity: number;
  CartonInnerQuantity: number;
  HSCode: string;
  CountryOfOrigin: string;
}

export interface UpdateProductData {
  ID: string;
  SKU: string;
  Name: string;
  Category: string;
  Brand?: string | null;
  CostingMethod: string;
  DropShipMode: string;
  DefaultLocation: string;
  Length: number;
  Width: number;
  Height: number;
  Weight: number;
  UOM: string;
  WeightUnits: string;
  DimensionsUnits?: string | null;
  Barcode: string;
  MinimumBeforeReorder: number;
  ReorderQuantity: number;
  PriceTier1: number;
  PriceTier2: number;
  PriceTier3: number;
  PriceTier4: number;
  PriceTier5: number;
  PriceTier6: number;
  PriceTier7: number;
  PriceTier8: number;
  PriceTier9: number;
  PriceTier10: number;
  PriceTiers: PriceTiers;
  ShortDescription: string;
  Description: string;
  InternalNote: string;
  AdditionalAttribute1: string;
  AdditionalAttribute2: string;
  AdditionalAttribute3: string;
  AdditionalAttribute4: string;
  AdditionalAttribute5: string;
  AdditionalAttribute6: string;
  AdditionalAttribute7: string;
  AdditionalAttribute8: string;
  AdditionalAttribute9: string;
  AdditionalAttribute10: string;
  AttributeSet?: string | null;
  DiscountRule?: string | null;
  Tags: string;
  Status: string;
  StockLocator: string;
  COGSAccount?: string | null;
  RevenueAccount?: string | null;
  ExpenseAccount?: string | null;
  InventoryAccount?: string | null;
  PurchaseTaxRule?: string | null;
  SaleTaxRule?: string | null;
  Sellable: boolean;
  PickZones: string;
  BillOfMaterial: boolean;
  AutoAssembly: boolean;
  AutoDisassembly: boolean;
  QuantityToProduce: number;
  AssemblyInstructionURL: string;
  AssemblyCostEstimationMethod: string;
  Suppliers: Supplier[];
  ReorderLevels: ReorderLevel[];
  BillOfMaterialsProducts: BillOfMaterialProduct[];
  BillOfMaterialsServices: BillOfMaterialService[];
  CartonHeight: number;
  CartonWidth: number;
  CartonLength: number;
  CartonQuantity: number;
  CartonInnerQuantity: number;
  HSCode: string;
  CountryOfOrigin: string;
}

export class ProductMutations extends BaseCin7SDK {
  async createProduct<T>(productData: CreateProductData): Promise<T> {
    return this.post<T>("product", productData);
  }

  async updateProduct<T>(productData: UpdateProductData): Promise<T> {
    return this.put<T>(`product`, productData);
  }
}
