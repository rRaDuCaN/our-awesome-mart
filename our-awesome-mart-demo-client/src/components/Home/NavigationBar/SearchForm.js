import React from 'react'
import './SearchForm.css'
import SearchByCategory from './SearchFormSupplements/SearchByCategory'
import InputSearch from './SearchFormSupplements/InputSearch'
import SearchButton from './SearchFormSupplements/SearchButton'

export default function SearchForm() {
    return (
        <form className="SearchForm flexStandard">
            <SearchByCategory />
            <InputSearch />
            <SearchButton />
        </form>
    )
}
