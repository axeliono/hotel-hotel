import React from 'react'

export default function Banner({title, subtitle}) {
    return (
        <div className="banner">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
};