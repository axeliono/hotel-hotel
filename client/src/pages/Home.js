import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="Basic Rooms" subtitle="Basic rooms starting at $99!">
                <Link to="/rooms" className="btn-primary">Rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        </>
    )
}