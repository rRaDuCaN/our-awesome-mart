import React from 'react'
import './InputSearch.css'

export default function InputSearch() {
    return (
        <input
        type="text"
        placeholder="Search"
        name="search"
        aria-label="Search"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        className="InputSearch"/>
    );
}
