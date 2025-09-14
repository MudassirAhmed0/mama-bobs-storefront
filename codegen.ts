import { CodegenConfig } from "@graphql-codegen/cli";
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env" });

const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_API_URL!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
console.log({ endpoint, token: token?.slice(0, 6) + "..." });
const config: CodegenConfig = {
  schema: [
    {
      [endpoint]: {
        headers: {
          "X-Shopify-Storefront-Access-Token": token,
          "Content-Type": "application/json",
        },
      },
    },
  ],
  documents: ["src/**/*.{ts,tsx,graphql}"],
  generates: {
    "./src/types/shopify-graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: {
          endpoint,
          fetchParams: {
            headers: { "X-Shopify-Storefront-Access-Token": token },
          },
        },
      },
    },
  },
};

export default config;
