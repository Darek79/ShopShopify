// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { storefrontClient } from '../../ShopifyClient';
import type { RequestReturn } from '@shopify/shopify-api';
import type { CHECKOUT_URL } from 'Types/Checkout_URL';
import type { LineItems } from 'Mobx/stores/BasketStore';

type Data = {
    url?: string;
    error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const lineItems: LineItems[] = req.body;
    try {
        const urlData: RequestReturn<CHECKOUT_URL> = await storefrontClient.query({
            data: {
                query: `mutation cartUrl($items:[CartLineInput!]) {
                  cartCreate(input: {lines: $items}) {
                    cart {
                      createdAt
                      checkoutUrl
                    }
                    userErrors {
                      field
                      message
                    }
                  }
                }`,
                variables: {
                    items: lineItems,
                },
            },
        });
        if (urlData.body.data.cartCreate.cart.checkoutUrl) {
            res.status(200).json({ url: urlData.body.data.cartCreate.cart.checkoutUrl, error: '' });
        }
    } catch (error) {
        if (error) console.log(error);
    }
}
