import { React, FunctionComponent } from "/lib/React";
import { BridgedCanvas } from "/framework/BridgedCanvas";
import { Clouds } from "/view/clouds/Clouds";

export const BigSky: FunctionComponent = () => {
    return (
        <BridgedCanvas>
            <Clouds />
        </BridgedCanvas>
    );
};
