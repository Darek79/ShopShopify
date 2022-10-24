import { ImageProps } from 'next/image';
import { Node } from 'Types/ProductDetail';
import { makeAutoObservable, runInAction } from 'mobx';

export interface ProductAmountI {
    quantity: number;
    id: Node['tags'][0];
    price: number;
    imageUrl: ImageProps['src'] | string;
    title: string;
    merchandiseId: string;
}

export interface LineItems {
    quantity: number;
    merchandiseId: string;
}

export interface BasketI {
    productsArray: ProductAmountI[];
    pushProductToBasket: (obj: Node) => void;
    removeOneProduct: (val: string) => void;
    totalSumBasket: number;
    calcTotalSum(): void;
    resetProductsArray(): void;
    lowerProductAmount: (val: string) => void;
    addProductAmount: (val: string) => void;
    showProductWasAdded: boolean;
    showProductWasAddedSwitcher(): void;
    addedProductValueIndex: number;
    showProductWasAddedClose(): void;
    lineItem: LineItems[];
    getLineItems(): void;
    start: boolean;
}

class Basket implements BasketI {
    productsArray: ProductAmountI[] = [];
    totalSumBasket = 0;
    showProductWasAdded = false;
    start = false;
    addedProductValueIndex = 0;
    lineItem: LineItems[] = [];
    constructor() {
        makeAutoObservable(this);
    }
    pushProductToBasket(val: Node) {
        const objectIndex = this.productsArray.findIndex(obj => obj.id === val.tags[0]);

        if (objectIndex < 0) {
            this.productsArray.push({
                quantity: 1,
                id: val.tags[0],
                price: Number(val.priceRange.maxVariantPrice.amount),
                imageUrl: val.featuredImage.url,
                title: val.title,
                merchandiseId: val.variants.edges[0].node.id,
            });
            this.addedProductValueIndex = 0;
            this.showProductWasAdded = true;
            this.calcTotalSum();
            return null;
        }
        runInAction(() => {
            this.productsArray[objectIndex].quantity += 1;
            this.addedProductValueIndex = objectIndex;
            this.calcTotalSum();
            this.showProductWasAdded = true;
        });
    }

    addProductAmount(val: string): void {
        const objectIndex = this.productsArray.findIndex(obj => obj.id === val);
        if (objectIndex < 0) {
            return;
        }
        runInAction(() => {
            this.productsArray[objectIndex].quantity++;
            this.calcTotalSum();
        });
    }
    lowerProductAmount(val: string): void {
        const objectIndex = this.productsArray.findIndex(obj => obj.id === val);
        if (objectIndex < 0 || this.productsArray[objectIndex].quantity === 1) {
            return;
        }
        runInAction(() => {
            this.productsArray[objectIndex].quantity--;
            this.calcTotalSum();
        });
    }
    removeOneProduct(val: string) {
        this.productsArray = this.productsArray.filter(el => el.id !== val);
        if (!this.productsArray.length) {
            this.totalSumBasket = 0;
        }
    }
    calcTotalSum() {
        this.totalSumBasket = this.productsArray.reduce((acc, prod) => {
            return acc + prod.price * prod.quantity;
        }, 0);
    }

    resetProductsArray(): void {
        this.productsArray = [];
    }
    showProductWasAddedClose() {
        this.showProductWasAdded = false;
    }
    showProductWasAddedSwitcher(): void {
        setTimeout(() => {
            if (this.showProductWasAdded) {
                runInAction(() => {
                    this.showProductWasAdded = false;
                });
            }
        }, 5000);
    }
    async getLineItems() {
        if (!this.start) {
            runInAction(() => {
                this.start = true;
                this.lineItem = this.productsArray.map(el => ({
                    quantity: el.quantity,
                    merchandiseId: el.merchandiseId,
                }));
            });
        }
        setTimeout(() => {
            runInAction(() => {
                this.start = false;
            });
        }, 1000);
    }
}

const basketStore = new Basket();
export default basketStore;
