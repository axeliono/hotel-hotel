import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

export default function Login() {
    return (
        <Hero>
            <Banner title="Login" subtitle="page not found">
                <link to='/login' className="btn-primary">
                    Go home
                </link>
            </Banner>
        </Hero>
    )
}