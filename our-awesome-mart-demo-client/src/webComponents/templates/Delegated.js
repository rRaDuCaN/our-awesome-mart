import React from 'react';
import './litElement1';

export default function Delegated() {
    return (
        <>
            <my-element>
                <div slot="something">
                    <h3>Can it handle JSX too?</h3>
                    <p>or it's rather a stupid idea</p>
                    <h4>You know, aren't you?</h4>
                </div>
            </my-element>
        </>
    )
}
