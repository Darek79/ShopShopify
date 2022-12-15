import type { NextPage } from 'next';
import Head from 'next/head';
import {
    Hero,
    PageWrapper,
    Navigation,
    Sidebar,
    ScrolledNavigation,
    CategoryCard,
    PageSplitter,
    Card,
    ContentSplitter,
    ImageSlider,
    Footer,
} from 'components';
import { storefrontClient } from './../ShopifyClient';
import type { RequestReturn } from '@shopify/shopify-api';
import { PRODUCT, EdgesEntity } from 'Types/Products';

interface HomepageI {
    topProducts: EdgesEntity[];
    middleProducts: EdgesEntity[];
    sliderProducts: EdgesEntity[];
}

const Home: NextPage<HomepageI> = ({ topProducts, middleProducts, sliderProducts }) => {
    return (
        <PageWrapper>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <ScrolledNavigation />
            <Navigation />
            <main className="max-w-screen-2xl w-full defaultPageContentOnGrid overflow-hidden">
                <Hero />
                <PageSplitter h2Content="Best Seller" pContent="Phasellus faucibus non libero" />
                <ContentSplitter className="contentSplitter8">
                    {topProducts &&
                        topProducts.map(el => (
                            <Card
                                key={el.node.images.nodes[0].id}
                                imgSrc={el.node.images.nodes[0].url}
                                imgAlt={el.node.images.nodes[0].altText}
                                className=""
                                href={el.node.tags[0]}
                                h2Content={el.node.title}
                                pContent={el.node.priceRange.maxVariantPrice.amount}
                            />
                        ))}
                </ContentSplitter>
                <PageSplitter h2Content="Best Seller" pContent="Phasellus faucibus non libero" />
                <ContentSplitter className="contentSplitter3">
                    <CategoryCard
                        href="#"
                        imageWrapperClasses="categoryCardProduct"
                        headerPositionClasses="bottom-5 w-full"
                    />
                    <CategoryCard
                        href="#"
                        imageWrapperClasses="categoryCardProduct"
                        headerPositionClasses="bottom-5 w-full"
                    />
                    <CategoryCard
                        href="#"
                        imageWrapperClasses="categoryCardProduct"
                        headerPositionClasses="bottom-5 w-full"
                    />
                </ContentSplitter>
                <PageSplitter h2Content="Best Seller" pContent="Phasellus faucibus non libero" />
                <ContentSplitter className="contentSplitter3">
                    {middleProducts &&
                        middleProducts.map(el => (
                            <Card
                                key={el.node.images.nodes[0].id}
                                imgSrc={el.node.images.nodes[0].url}
                                imgAlt={el.node.images.nodes[0].altText}
                                className=""
                                href={el.node.tags[0]}
                                h2Content={el.node.title}
                                pContent={el.node.priceRange.maxVariantPrice.amount}
                            />
                        ))}
                </ContentSplitter>
                <PageSplitter h2Content="Best Seller" pContent="Phasellus faucibus non libero" />
                <ContentSplitter className="grid grid-rows-5 md:grid-cols-8 md:grid-rows-2 overflow-hidden">
                    <CategoryCard
                        href="#"
                        className="row-start-1 row-end-2 md:col-start-1 md:col-span-4 md:row-span-2"
                        imageWrapperClasses="aspect16_9"
                        objectPosition="top"
                        headerPositionClasses="bottom-3 w-full"
                    />
                    <CategoryCard
                        href="#"
                        className="row-start-2 row-end-4 py-4 md:py-0 md:col-start-5 md:col-span-2 md:row-start-1 md:row-end-3"
                        imageWrapperClasses="h-full"
                        headerPositionClasses="bottom-3 w-full"
                    />
                    <CategoryCard
                        href="#"
                        className="row-start-4 row-end-6 md:col-start-7 md:col-span-2 md:row-start-1 md:row-end-3"
                        imageWrapperClasses="h-full"
                        headerPositionClasses="bottom-3 w-full"
                    />
                </ContentSplitter>
                <PageSplitter h2Content="Best Seller" pContent="Phasellus faucibus non libero" />
                <ImageSlider buttonOnMobile slideArray={sliderProducts} />
            </main>
            <footer className="max-w-screen-2xl w-full defaultPageContentOnGrid pt-10 pb-5">
                <Footer />
            </footer>
        </PageWrapper>
    );
};

export default Home;

export async function getStaticProps() {
    // Use client.query and pass your query as `data`
    const {
        body: {
            data: { products },
        },
    }: RequestReturn<PRODUCT> = await storefrontClient.query({
        data: `query Home {
            products(first: 20) {
          edges {
            node {
              id
              title
              tags
              images(first:1){
                nodes{
                  url
                  height
                  width
                  altText
                  id
                }
              }
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }`,
    });
    const topProducts: EdgesEntity[] = products.edges?.slice(0, 8);
    const middleProducts: EdgesEntity[] = products.edges?.slice(9, 12);
    const sliderProducts: EdgesEntity[] = products.edges?.slice(12, 20);
    return {
        props: { topProducts: topProducts, middleProducts: middleProducts, sliderProducts: sliderProducts },
    };
}
