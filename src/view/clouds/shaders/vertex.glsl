// clang-format off
#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
// clang-format on

/**
 * Injected by THREE.js:
 * uniform mat4 modelMatrix;         // = object.matrixWorld
 * uniform mat4 modelViewMatrix;     // = camera.matrixWorldInverse * object.matrixWorld
 * uniform mat4 projectionMatrix;    // = camera.projectionMatrix
 * uniform mat4 viewMatrix;          // = camera.matrixWorldInverse
 * uniform mat3 normalMatrix;        // = inverse transpose of modelViewMatrix
 * uniform vec3 cameraPosition;      // = camera position in world space
 *
 * Default vertex attributes provided by Geometry and BufferGeometry
 * attribute vec3 position;
 * attribute vec3 normal;
 * attribute vec2 uv;
 */

uniform float time;
uniform float spectrum[4];

varying vec2 vUv;
varying float displacement;

/*!
 * Noise amplitude at the given frequency
 */
float weight(vec3 position, float frequency) { return 0.5 * 0.5 * snoise3(position * frequency); }

/*!
 * Combines pink-like noises at different frequencies as a function in time.
 */
float souffle(float time, vec3 position, float spectrum[4]) {
    return weight(position, spectrum[0]) * cos(time / spectrum[0]) +
           weight(position, spectrum[1]) * cos(time / spectrum[1]) +
           weight(position, spectrum[2]) * cos(time / spectrum[2]) +
           weight(position, spectrum[3]) * cos(time / spectrum[3]);
}

void main() {
    vUv = uv;

    float noise = souffle(time, position, spectrum);
    displacement = noise;

    vec3 newPosition = position + normal * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
