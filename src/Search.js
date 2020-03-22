import React from 'react';

export function Search({query, onChange, children}) {
    return (
        <div>
            {children} <input
            type="text"
            value={query}
            onChange={onChange}
        />
        </div>
    );
}