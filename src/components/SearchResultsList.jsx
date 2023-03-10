import React from "react";
import { SearchResult } from "./SearchResult";
import "./SearchResultsList.css"

export const SearchResultList = ({results}) => {
    return (
        <div className="results-list">
            {
                results.map((result, id) => {
                    return <SearchResult key={id} result={result}/>
                })
            }
        </div>
    );
};
