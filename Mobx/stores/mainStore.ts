import { makeAutoObservable } from 'mobx';

export interface MainStoreI {
    openSidebar: boolean;
    sidebarHandler(): void;
    isScrolling: boolean;
    handlebarScrolling(scroll: boolean): void;
}

class MainStore implements MainStoreI {
    openSidebar = false;
    isScrolling = false;
    constructor() {
        makeAutoObservable(this);
    }
    handlebarScrolling(value: boolean): void {
        this.isScrolling = value;
    }
    sidebarHandler(): void {
        this.openSidebar = !this.openSidebar;
    }
}

const mainStore = new MainStore();
export default mainStore;
