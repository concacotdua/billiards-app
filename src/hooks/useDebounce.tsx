// Test create hook
import { useEffect, useState } from "react";

interface useDebounceProps {
    value: string,
    delay: number,
}
function useDebounce({ value, delay }: useDebounceProps) {

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debounceValue
}

export default useDebounce;