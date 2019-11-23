import * as THREE from "three";
import { ReactThreeFiber } from "react-three-fiber";

export { Cache, FileLoader } from "three";

export { Canvas, useFrame } from "react-three-fiber";

export type MeshNode = ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;

export function isVector3(vector: THREE.Vector3 | number[] | undefined): vector is THREE.Vector3 {
    return vector !== undefined && vector instanceof THREE.Vector3;
}

export function isVector3Array(vector: THREE.Vector3 | number[] | undefined): vector is number[] {
    return vector !== undefined && !(vector instanceof THREE.Vector3) && vector.length == 3;
}

export function isVector4(vector: THREE.Vector4 | number[] | undefined): vector is THREE.Vector4 {
    return vector !== undefined && vector instanceof THREE.Vector4;
}

export function isVector4Array(vector: THREE.Vector4 | number[] | undefined): vector is number[] {
    return vector !== undefined && !(vector instanceof THREE.Vector4) && vector.length == 4;
}

export function isEuler(rotation: THREE.Euler | number[] | undefined): rotation is THREE.Euler {
    return rotation !== undefined && rotation instanceof THREE.Euler;
}

export function isEulerArray(rotation: THREE.Euler | number[] | undefined): rotation is number[] {
    return rotation !== undefined && !(rotation instanceof THREE.Euler) && rotation.length == 3;
}
