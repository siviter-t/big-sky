import { useState } from "/lib/React";

export function usePending(): [boolean, Error | null, () => void, (error: any) => void] {
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const done = () => setPending(false);
    const reject = () => {
        setPending(false);
        setError(error instanceof Error ? error : new Error(`Unknown pending error: ${error}`));
    };

    return [isPending, error, done, reject];
}
