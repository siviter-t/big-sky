/**
 * Injected by THREE.js:
 * uniform mat4 viewMatrix;          // = camera.matrixWorldInverse
 * uniform vec3 cameraPosition;      // = camera position in world space
 */

varying vec2 vUv;
varying float displacement;

void main() {
    float f = 1.0 - 0.95 * displacement;
    vec4 color = vec4(f, 0.5 * f, 1.0 - f, f);
    gl_FragColor = vec4(color.rgba);
}
