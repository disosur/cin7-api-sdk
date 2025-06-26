import { Cin7CoreSDK } from "../src/index";

async function example() {
  const accountId = process.env.CIN7_ACCOUNT_ID || "your-account-id";
  const applicationKey =
    process.env.CIN7_APPLICATION_KEY || "your-application-key";

  const cin7 = new Cin7CoreSDK(accountId, applicationKey);

  try {
    console.log("=� Cin7 Core SDK Example\n");

    // Get all products
    console.log("=� Fetching products...");
    const products = await cin7.product.queries.getProducts<any>({ limit: 5 });
    console.log(`Found ${products.length || 0} products`);

    console.log("\n Example completed successfully!");
  } catch (error) {
    console.error("L Error:", error instanceof Error ? error.message : error);
  }
}

// Run the example
example();
