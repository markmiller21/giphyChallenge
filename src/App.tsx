import React, { useState, useEffect } from 'react';

import { ResultsContainer } from './App.styled';
import { Banner, GiphyCard, Input, Spinner } from './components';

import { useDebounce } from './hooks';
import { GIFObject } from './types';

const GIPHY_SECRET: string = 'Z5xPIBDufh2ONodT4tRKapOkvRsGh0B0'; // TODO: move this somewhere more secret
const initialSearch: string = 'Cute Dog';

function App() {
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [results, setResults] = useState<GIFObject[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(true); // This starts as true because I prepopulate a search for the user

    const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500 millisecond debounce "felt right" after playing around with the app

    useEffect(() => {
        async function fetchGifs() {
            try {
                setIsSearching(true);
                // As API calls scale, I would use a http client like axios
                const response = await fetch(
                    `http://api.giphy.com/v1/gifs/search?q=${debouncedSearchTerm}}&api_key=${GIPHY_SECRET}&limit=25`
                );

                const json = await response.json();
                const data: GIFObject[] = json.data;
                setResults(data);
                setIsSearching(false);
            } catch (error) {
                setIsSearching(false);
            }
        }
        fetchGifs();
    }, [debouncedSearchTerm]);

    return (
        <div>
            <Banner />
            <Input
                name="giphySearch"
                placeholder={initialSearch}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {isSearching && !results && (
                <>
                    <p>Searching ...</p>
                    <Spinner />
                </>
            )}

            {!isSearching && results.length === 0 && (
                <h2>No results found. Please try another search</h2>
            )}

            {results && (
                <ResultsContainer>
                    {results.map((gif) => (
                        <GiphyCard {...gif} />
                    ))}
                </ResultsContainer>
            )}
        </div>
    );
}

export default App;
