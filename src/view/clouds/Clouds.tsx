import { React, FunctionComponent, useMemo, useRef } from "/lib/React";
import { MeshNode, useFrame, isEuler } from "/lib/ReactThreeFiber";
import { useStoreSelection } from "/framework/StoreContext";
import { isDefined } from "/utils/IsDefined";

import vertex from "/view/clouds/shaders/vertex.glsl";
import fragment from "/view/clouds/shaders/fragment.glsl";

const useMappedStore = () =>
    useStoreSelection(store => ({
        time: store.time,
        tickTime: store.tickTime,
        ...store.clouds
    }));

export const Clouds: FunctionComponent = () => {
    const { time, tickTime, spectrum } = useMappedStore();

    const ref = useRef<MeshNode>();
    useFrame(() => {
        if (!isDefined(ref?.current) || !isEuler(ref.current.rotation)) return;
        ref.current.rotation.x = 0.3 * time;
        ref.current.rotation.y = 0.2 * time;
        tickTime();
    });

    const uniforms = useMemo(
        () => ({
            time: { type: "f", value: time },
            spectrum: { type: "fv1", value: spectrum }
        }),
        []
    );

    return (
        <mesh ref={ref}>
            <icosahedronBufferGeometry attach="geometry" args={[1, 5]} />
            <shaderMaterial
                attach="material"
                fragmentShader={fragment}
                vertexShader={vertex}
                transparent
                uniforms={uniforms}
                uniforms-time-value={time}
                uniforms-spectrum-value={spectrum}
            />
        </mesh>
    );
};
