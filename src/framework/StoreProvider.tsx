import { React, FunctionComponent, useState } from "/lib/React";
import { Instance } from "/lib/MST";
import { StoreContext } from "/framework/StoreContext";
import { Store } from "/model/Store";

interface Props {
    initialStore: Instance<typeof Store>;
}

export const StoreProvider: FunctionComponent<Props> = props => {
    const [store] = useState(props.initialStore);
    return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>;
};
