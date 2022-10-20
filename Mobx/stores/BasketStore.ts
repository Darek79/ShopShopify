import { ImageProps } from 'next/image';
import { Node } from 'Types/ProductDetail';
import { makeAutoObservable, runInAction } from 'mobx';

export interface ProductAmountI {
    amount: number;
    id: Node['tags'][0];
    price: number;
    imageUrl: ImageProps['src'] | string;
    title: string;
}

export interface BasketI {
    productsArray: ProductAmountI[];
    pushProductToBasket: (obj: Node) => void;
    removeOneProduct: (obj: Node) => void;
    totalSumBasket: number;
    calcTotalSum(): void;
    resetProductsArray(): void;
    lowerProductAmount: (val: string) => void;
    showProductWasAdded: boolean;
    showProductWasAddedSwitcher(): void;
    addedProductValueIndex: number;
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

    lowerProductAmount(val: string): void {
        const objectIndex = this.productsArray.findIndex(obj => obj.id === val);

        if (objectIndex < 0) {
            return;
        }
        runInAction(() => {
            this.productsArray[objectIndex].amount--;
        });
    }
    removeOneProduct(obj: Node) {
        this.productsArray = this.productsArray.filter(el => el.id !== obj.tags[0]);
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
    showProductWasAddedSwitcher(): void {
        setTimeout(() => {
            runInAction(() => {
                this.showProductWasAdded = false;
            });
        }, 5000);
    }
}

const basketStore = new Basket();
export default basketStore;
