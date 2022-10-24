export interface CHECKOUT_URL {
    data: Data;
}
export interface Data {
    cartCreate: CartCreate;
}
export interface CartCreate {
    cart: Cart;
    userErrors?: UserErrorsEntity[] | null;
}
export interface Cart {
    createdAt: string;
    checkoutUrl: string;
}
export interface UserErrorsEntity {
    field?: string[] | null;
    message: string;
}
