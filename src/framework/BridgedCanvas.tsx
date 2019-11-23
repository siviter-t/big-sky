import { React, FunctionComponent, useContext } from "/lib/React";
import { Canvas } from "/lib/ReactThreeFiber";
import { StoreContext } from "/framework/StoreContext";

/**
 * Unfortunately, context is not currently passed through the reconciler boundary.
 * This solution bridges StoreContext into the Canvas tree.
 * @see https://github.com/react-spring/react-three-fiber/issues/114
 */
export const BridgedCanvas: FunctionComponent = props => {
    const store = useContext(StoreContext);
    return (
        <Canvas>
            <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
        </Canvas>
    );
};
