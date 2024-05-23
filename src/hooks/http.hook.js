import { useState, useCallback } from 'react';

export const useHttp = () => {
    // finite state machine
    const [process, setProcess] = useState('waiting');

    const request = useCallback(
        async (
            url,
            method = 'GET',
            body = null,
            headers = { 'Content-Type': 'application/json' }
        ) => {
            // finite state machine
            setProcess('loading');

            try {
                const response = await fetch(url, { method, body, headers });

                if (!response.ok) {
                    throw new Error(
                        `Could not fetch ${url}, status: ${response.status}`
                    );
                }

                const data = await response.json();
                return data;
            } catch (error) {
                // finite state machine
                setProcess('error');
                throw error;
            }
        },
        []
    );

    const clearError = useCallback(() => {
        // finite state machine
        setProcess('loading');
    }, []);

    return {
        request,
        clearError,
        process,
        setProcess,
    };
};
