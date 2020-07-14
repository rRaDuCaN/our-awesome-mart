import React from 'react'
import "./SearchByCategory.css"
import caretDown from '../../../../imgs/Home/Header/Navbar/caret-down-black.5d3320ad009f3bcb0c940ed92c776cce3840db43.svg'

export default function SearchByCategory() {
    return (
        <button className="SearchByCategory">
            <span>
                <span className="Align">
                    All Departments
                </span>
                <img srcSet={caretDown} alt="All Departments" className="CaretDown"/>
            </span>
        </button>
    )
}
