import { createContext, useContext } from "/lib/React";
import { Instance, useObserver } from "/lib/MST";
import { Store } from "/model/Store";

export const StoreContext = createContext<Instance<typeof Store> | null>(null);

type Selector<T> = (store: Instance<typeof Store>) => T;

export const useStoreSelection = <T>(selector: Selector<T>) => {
    const store = useContext(StoreContext);
    if (!store) throw new Error("Store is not initialised");
    return useObserver(() => selector(store));
};
