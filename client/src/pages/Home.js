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
display: flex;
justify-content: center;
align-items: center;
height: 100%
width: 100%
`;

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
