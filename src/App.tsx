import { React, ReactDOM, FunctionComponent, StrictMode } from "/lib/React";
import { StoreProvider } from "/framework/StoreProvider";
import { useAppInitialiser } from "/framework/UseAppInitialiser";
import { BigSky } from "/view/BigSky";

function getAppRoot() {
    return document.querySelector("#app");
}

const App: FunctionComponent = () => {
    const [isLoading, store, error] = useAppInitialiser();
    if (isLoading) return <div>Loading...</div>;
    if (error || !store) return <div>{`Error: ${error || "Unknown"}`}</div>;
    return (
        <StrictMode>
            <StoreProvider initialStore={store}>
                <BigSky />
            </StoreProvider>
        </StrictMode>
    );
};

ReactDOM.render(<App />, getAppRoot());
