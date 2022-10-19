export interface PRODUCT {
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
    tags: [string];
    images: Images;
    priceRange: PriceRange;
  }
export interface Images {
    nodes: NodesEntity[];
}
export interface NodesEntity {
    url: string;
    height: number;
    width: number;
    altText: string;
    id: string;
}
export interface PriceRange {
    maxVariantPrice: MaxVariantPrice;
}
export interface MaxVariantPrice {
    amount: string;
    currencyCode: string;
}
