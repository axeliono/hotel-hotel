<<<<<<< HEAD
import logo from '../logo.svg'
import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { Link } from 'react-router-dom';
import './style.css';
import styled from 'styled-components';
const Wrapper = styled.section
`
=======
import logo from "../logo.svg";
import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import "./style.css";
import styled from "styled-components";
const Wrapper = styled.section`
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
display: flex;
justify-content: center;
align-items: center;
height: 100%
width: 100%
`;

export default function Home() {
<<<<<<< HEAD
    return (
        <>
        <Hero/>  
        <Services/>
        </>
    )
=======
  return (
    <>
      <Hero />
      <Services />
    </>
  );
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
}
