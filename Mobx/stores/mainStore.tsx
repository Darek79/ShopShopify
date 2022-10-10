import { makeAutoObservable } from 'mobx';

export interface MainStoreI {
    openSidebar: boolean;
    sidebarHandler(): void;
}

class MainStore implements MainStoreI {
    openSidebar = false;
    constructor() {
        makeAutoObservable(this);
    }

    sidebarHandler(): void {
        this.openSidebar = !this.openSidebar;
    }
}

const mainStore = new MainStore();
export default mainStore;
