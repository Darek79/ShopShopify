export interface PRODUCT_DETAIL {
    data: Data;
}
export interface Data {
    products: Products;
}
export interface Products {
    edges: EdgesEntity[];
}
export interface EdgesEntity {
    node: Node;
}
export interface Node {
    id: string;
    title: string;
    description: string;
    tags: [string];
    featuredImage: FeaturedImage;
    priceRange: PriceRange;
}
export interface FeaturedImage {
    altText: string;
    url: string;
    width: number;
    height: number;
}
export interface PriceRange {
    maxVariantPrice: MaxVariantPrice;
}
export interface MaxVariantPrice {
    amount: string;
    currencyCode: string;
}
