# Cin7 Core API SDK

An Unofficial TypeScript SDK for the Cin7 Core API v2, providing a modern, modular interface for inventory management operations.

## Features

- ✅ **TypeScript Support** - Full type safety and IntelliSense
- 🏗️ **Modular Architecture** - Organized by resource types
- 🔄 **Promise-based** - Modern async/await API
- 📦 **Tree-shakable** - Import only what you need
- 🎯 **Query & Mutation Pattern** - Clear separation of read/write operations

## Installation

```bash
npm install cin7-core-api-sdk
```

## Quick Start

```typescript
import { Cin7CoreSDK } from "cin7-core-api-sdk";

const cin7 = new Cin7CoreSDK("your-account-id", "your-application-key");

// Get products
const products = await cin7.product.queries.getProducts<any>({ limit: 10 });

// Create a product
const newProduct = await cin7.product.mutations.createProduct({
  Name: "Example Product",
  SKU: "EXP-001",
});
```

## Authentication

You'll need your Cin7 Core Account ID and Application Key:

1. Log into your Cin7 Core account
2. Go to **Settings** → **API**
3. Create a new application or use an existing one
4. Copy your Account ID and Application Key

## API Reference

### Core SDK

```typescript
const cin7 = new Cin7CoreSDK(accountId, applicationKey);
```

### Product Module

#### Queries (GET operations)

```typescript
// Get all products with optional filters
const products = await cin7.product.queries.getProducts<any>({
  search?: string;
  sku?: string;
  name?: string;
  limit?: number;
  page?: number;
});

// Get single product by ID
const product = await cin7.product.queries.getProduct<any>(productId);
```

#### Mutations (POST/PUT/DELETE operations)

```typescript
// Create a new product
const newProduct = await cin7.product.mutations.createProduct(productData);

// Update existing product
const updatedProduct = await cin7.product.mutations.updateProduct(
  id,
  productData
);

// Delete product
await cin7.product.mutations.deleteProduct(id);
```

### Customer Module

#### Queries

```typescript
// Get all customers
const customers = await cin7.customer.queries.getCustomers<any>({
  search?: string;
  limit?: number;
  page?: number;
});

// Get single customer
const customer = await cin7.customer.queries.getCustomer<any>(customerId);
```

#### Mutations

```typescript
// Create customer
const newCustomer = await cin7.customer.mutations.createCustomer(customerData);

// Update customer
const updatedCustomer = await cin7.customer.mutations.updateCustomer(
  id,
  customerData
);

// Delete customer
await cin7.customer.mutations.deleteCustomer(id);
```

### Sales Module

#### Queries

```typescript
// Get sales
const sales = await cin7.sales.queries.getSales<any>({
  search?: string;
  limit?: number;
  page?: number;
});

// Get single sale
const sale = await cin7.sales.queries.getSale<any>(saleId);
```

#### Mutations

```typescript
// Create sale
const newSale = await cin7.sales.mutations.createSale(saleData);

// Update sale
const updatedSale = await cin7.sales.mutations.updateSale(id, saleData);

// Delete sale
await cin7.sales.mutations.deleteSale(id);
```

### Purchase Module

#### Queries

```typescript
// Get purchases
const purchases = await cin7.purchase.queries.getPurchases<any>({
  search?: string;
  limit?: number;
  page?: number;
});

// Get single purchase
const purchase = await cin7.purchase.queries.getPurchase<any>(purchaseId);
```

#### Mutations

```typescript
// Create purchase
const newPurchase = await cin7.purchase.mutations.createPurchase(purchaseData);

// Update purchase
const updatedPurchase = await cin7.purchase.mutations.updatePurchase(
  id,
  purchaseData
);

// Delete purchase
await cin7.purchase.mutations.deletePurchase(id);
```

### Reference Module

#### Queries (Read-only reference data)

```typescript
// Get locations
const locations = await cin7.reference.queries.getLocations<any>();

// Get product categories
const categories = await cin7.reference.queries.getProductCategories<any>();

// Get product brands
const brands = await cin7.reference.queries.getProductBrands<any>();

// Get payment terms
const paymentTerms = await cin7.reference.queries.getPaymentTerms<any>();
```

## Environment Variables

Set up your credentials using environment variables:

```bash
export CIN7_ACCOUNT_ID="your-account-id"
export CIN7_APPLICATION_KEY="your-application-key"
```

Or create a `.env` file:

```
CIN7_ACCOUNT_ID=your-account-id
CIN7_APPLICATION_KEY=your-application-key
```

## Example Usage

Check the `example/` directory for a complete working example:

```bash
cd example
npm install
cp .env.example .env
# Edit .env with your credentials
npm start
```

## Error Handling

All API calls return promises and will throw errors for HTTP failures:

```typescript
try {
  const products = await cin7.product.queries.getProducts<any>();
} catch (error) {
  console.error("API Error:", error.message);
}
```

## TypeScript Support

The SDK is built with TypeScript and provides full type definitions. Use generics to type your responses:

```typescript
interface Product {
  ID: string;
  Name: string;
  SKU: string;
}

const products = await cin7.product.queries.getProducts<Product[]>();
```

## Modular Imports

Import only the modules you need:

```typescript
import { ProductModule } from "cin7-core-api-sdk";

const productModule = new ProductModule(accountId, applicationKey);
const products = await productModule.queries.getProducts<any>();
```

## API Documentation

For detailed API documentation, visit the [official Cin7 Core API documentation](https://dearinventory.docs.apiary.io/).

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For SDK issues, please open an issue on GitHub.
For Cin7 Core API questions, contact Cin7 support.
