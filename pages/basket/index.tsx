import type { NextPage } from 'next';
import { Button } from 'components';
import Head from 'next/head';

import { PageWrapper, Page, Basket, BasketTotalSum } from 'components';

const BasketPage: NextPage = () => {
    return (
        <PageWrapper>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Page>
                <div className="">
                    <Basket />
                    <div className="flex gap-3 mt-5 md:w-[90%] md:justify-end">
                        <h3 className="text-[5vw] xs:text-[1.3rem] leading-tight">Total:</h3>
                        <BasketTotalSum />
                    </div>
                    <div className="w-full md:w-[90%] flex md:justify-end">
                        <Button className="checkoutButtonBasket mt-5">GO TO CHECKOUT</Button>
                    </div>
                    {/* <CheckoutRedirectButton /> */}
                </div>
            </Page>
        </PageWrapper>
    );
};

export default BasketPage;
