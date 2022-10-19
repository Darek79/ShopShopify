import Shopify from '@shopify/shopify-api';

// // Load the access token as per instructions above
const storefrontAccessToken = 'd2f2a6faf86c55e8e53fa6d10dc0f12c';
// // Shop from which we're fetching data
const shop = 'dkdevtechstore.myshopify.com';

// // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
export const storefrontClient = new Shopify.Clients.Storefront(shop, storefrontAccessToken);