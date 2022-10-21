import { ImageProps } from 'next/image';
import { Node } from 'Types/ProductDetail';
import { makeAutoObservable, runInAction } from 'mobx';

export interface ProductAmountI {
    amount: number;
    id: Node['tags'][0];
    price: number;
    imageUrl: ImageProps['src'] | string;
    title: string;
    gid: string;
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
}

class Basket implements BasketI {
    productsArray: ProductAmountI[] = [];
    totalSumBasket = 0;
    showProductWasAdded = false;
    addedProductValueIndex = 0;
    constructor() {
        makeAutoObservable(this);
    }
    pushProductToBasket(val: Node) {
        const objectIndex = this.productsArray.findIndex(obj => obj.id === val.tags[0]);

        if (objectIndex < 0) {
            this.productsArray.push({
                amount: 1,
                id: val.tags[0],
                price: Number(val.priceRange.maxVariantPrice.amount),
                imageUrl: val.featuredImage.url,
                title: val.title,
                gid: val.id,
            });
            this.addedProductValueIndex = 0;
            this.showProductWasAdded = true;
            this.calcTotalSum();
            return null;
        }
        runInAction(() => {
            this.productsArray[objectIndex].amount += 1;
            this.addedProductValueIndex = objectIndex;
            this.calcTotalSum();
            this.showProductWasAdded = true;
        });
    }

    addProductAmount(val: string): void {
        const objectIndex = this.productsArray.findIndex(obj => obj.id === val);
        console.log(objectIndex, '+');
        if (objectIndex < 0) {
            return;
        }
        runInAction(() => {
            this.productsArray[objectIndex].amount++;
            this.calcTotalSum();
        });
    }
    lowerProductAmount(val: string): void {
        const objectIndex = this.productsArray.findIndex(obj => obj.id === val);
        console.log(objectIndex, '-');
        if (objectIndex < 0 || this.productsArray[objectIndex].amount === 1) {
            return;
        }
        runInAction(() => {
            this.productsArray[objectIndex].amount--;
            this.calcTotalSum();
        });
    }
    removeOneProduct(val: string) {
        this.productsArray = this.productsArray.filter(el => el.id !== val);
    }
    calcTotalSum() {
        console.log('total sum');
        this.totalSumBasket = this.productsArray.reduce((acc, prod) => {
            return acc + prod.price * prod.amount;
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
}

const basketStore = new Basket();
export default basketStore;
