export interface PAGEID {
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
    tags: [string];
}
