import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <link to='/' className="btn-primary">
                    Go back
                </link>
            </Banner>
        </Hero>
    )
}