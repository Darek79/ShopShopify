import type { MainStoreI } from './mainStore';
import type { BasketI } from './BasketStore';
import MainStore from './mainStore';
import BasketStore from './BasketStore';

export interface RootStoreI {
    mainStore: MainStoreI;
    basketStore: BasketI;
}

class RootStore implements RootStoreI {
    mainStore: MainStoreI;
    basketStore: BasketI;
    constructor() {
        this.mainStore = MainStore;
        this.basketStore = BasketStore;
    }
}

const rootStore = new RootStore();
export default rootStore;
