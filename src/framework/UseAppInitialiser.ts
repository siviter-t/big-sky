import { useEffect, useState } from "/lib/React";
import { Cache } from "/lib/ReactThreeFiber";
import { Instance } from "/lib/MST";
import { usePending } from "/framework/UsePending";
import { Store, defaultStore } from "/model/Store";

export function useAppInitialiser(): [boolean, Instance<typeof Store> | null, Error | null] {
    const [isPending, error, done, reject] = usePending();
    const [store, setStore] = useState<Instance<typeof Store> | null>(null);

    useEffect(() => {
        const initialise = async () => {
            try {
                Cache.enabled = true;

                const initialStore = defaultStore();
                setStore(initialStore);

                done();
            } catch (error) {
                reject(error);
            }
        };

        initialise();
    }, []);

    return [isPending, store, error];
}
