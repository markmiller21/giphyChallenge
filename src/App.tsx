import React, { useState, useEffect } from 'react';

import { ResultsContainer } from './App.styled';
import { Banner, GiphyCard, Input } from './components';

import { useDebounce } from './hooks';
import { GIFObject } from './types';

const GIPHY_SECRET: string = 'Z5xPIBDufh2ONodT4tRKapOkvRsGh0B0'; // TODO: move this to .env file

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<GIFObject[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        async function fetchGifs() {
            try {
                setIsSearching(true);
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
                label="Giphy Search Term"
                name="giphySearch"
                placeholder="Do"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {isSearching && !results && <div>Searching ...</div>}
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
