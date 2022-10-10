import { createContext, useContext } from 'react';
import rootStore, { RootStoreI } from 'Mobx/stores/rootStore';

export const context = createContext<RootStoreI>(rootStore);

export default function useStore() {
    return useContext(context);
}
