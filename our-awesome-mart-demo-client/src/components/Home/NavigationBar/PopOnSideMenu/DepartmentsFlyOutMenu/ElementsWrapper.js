import React from 'react'

export default function ElementsWrapper({children}) {
    return (
        <div className="mg-pad0 pad-b0dot5 pad-top0dot5">
            <span className="font-w font-s AnchorBlackColor">
                {children}
            </span>
        </div>
    )
}
