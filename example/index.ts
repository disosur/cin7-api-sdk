import { Cin7CoreSDK } from "../src/index";
import "dotenv/config";

async function example() {
  const accountId = process.env.CIN7_ACCOUNT_ID || "acc id";
  const applicationKey = process.env.CIN7_APPLICATION_KEY || "app id";

  const cin7 = new Cin7CoreSDK(accountId, applicationKey);

  try {
    const products = await cin7.customer.queries.getCustomers<any>({
      limit: 5,
    });
    console.log(products);
  } catch (error) {
    console.error("L Error:", error instanceof Error ? error.message : error);
  }
}

// Run the example
example();
