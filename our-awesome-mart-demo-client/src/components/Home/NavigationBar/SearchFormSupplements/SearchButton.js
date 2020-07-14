import React from 'react'
import './SearchButton.css'
import searchMagnify from '../../../../imgs/Home/Header/Navbar/search-nav-black.b92f68559cf70c3bcfb9eae1d8dcca59ca58af11.svg'

export default function SearchButton() {
    return (
        <button className="SearchButton">
            <span>
                <img srcSet={searchMagnify} alt="SearchButton" className="Magnify"/>
            </span>
        </button>
    )
}
