import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

export default function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Rooms">
                <Link to="/" className="btn-primary">
                    Go home
                </Link>
            </Banner>
        </Hero>
        </>
    )
}