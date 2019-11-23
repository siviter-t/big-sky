import { types } from "/lib/MST";

import { Balloon } from "/model/Balloon";
import { Clouds } from "/model/Clouds";

export const Store = types
    .model({
        time: types.number,
        delta: types.number,
        clouds: Clouds,
        balloon: Balloon
    })
    .actions(self => ({
        tickTime: () => (self.time += self.delta)
    }));

export function defaultStore() {
    return Store.create({
        time: 0.0,
        delta: 0.1,
        clouds: {
            spectrum: [1, 8, 24, 40],
            disformRate: 0.01,
            lowThreshold: 0.5,
            highThreshold: 1.0
        },
        balloon: {
            wobble: 0.0,
            wobbleXFactor: 1.0,
            wobbleYFactor: 0.25,
            rotationXOffset: Math.PI / 2.0,
            rotationYOffset: Math.PI / 8.0
        }
    });
}
