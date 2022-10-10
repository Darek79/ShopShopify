import { createContext, useContext, Context } from 'react';
import rootStore, { RootStoreI } from 'Mobx/stores/rootStore';

export const context: Context<RootStoreI> = createContext<RootStoreI>(rootStore);

export default function useStore() {
    return useContext(context);
}
