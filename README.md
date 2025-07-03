# Cin7 Core API SDK

An Unofficial TypeScript SDK for the Cin7 Core API v2, providing a modern, modular interface for inventory management operations.

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
2. Go to **Integrations** → **API**
3. Create a new application or use an existing one
4. Copy your Account ID and Application Key

## API Reference

### Core SDK

```typescript
const cin7 = new Cin7CoreSDK(accountId, applicationKey);
```
