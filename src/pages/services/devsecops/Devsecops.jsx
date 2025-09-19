import React from 'react'
import Hero from './feature/Hero'
import OurApproach from './feature/OurApproach'
import Services from './feature/Services'
import CompetitiveEdge from './feature/CompetitiveEdge'
import Tools from './feature/Tools'

export default function Devsecops() {
    return (
        <>
            {/* Hero Section */}
            <Hero />
            <Services />
            <OurApproach />
            <CompetitiveEdge />
            <Tools />
        </>
    )
}
