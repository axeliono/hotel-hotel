import logo from '../logo.svg'
import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/hero'
import Services from '../components/Services'
import { Link } from 'react-router-dom';
import './style.css';
import styled from 'styled-components';







export default function Home() {
    return (
        <>
        <Hero/>  
        <Link to="/rooms" className="btn-primary">Rooms</Link>
        <Services/>
        </>
    )
}
