import React, { Link } from 'react'
import Banner from '../components/Banner'
import {Hero, Img} from '../components/Hero'

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