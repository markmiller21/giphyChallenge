import { useState, useEffect } from 'react';

// This hook will be used to debounce our input form.  This will prevent
export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const handler = setTimeout(() => setDebouncedValue(value), delay);
            return () => clearTimeout(handler);
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [value]
    );

    return debouncedValue;
}
