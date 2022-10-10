import type { MainStoreI } from './mainStore';
import MainStore from './mainStore';

export interface RootStoreI {
    mainStore: MainStoreI;
}

class RootStore implements RootStoreI {
    mainStore: MainStoreI;
    constructor() {
        this.mainStore = MainStore;
    }
}

const rootStore = new RootStore();
export default rootStore;
