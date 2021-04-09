//maybe add icons for services such as shuttles cocktails etc.

import React, { Component } from "react";
import { FaShuttleVan, FaCookie, FaCocktail } from "react-icons/fa";
import styled from "styled-components";
import "../../index.css";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: auto;
    height: 100%
    width: 100%
    justify-content: space-evenly;
    `;
    // background-image: url("https://i.imgur.com/6Fk4rE6.jpg");
    // background-repeat: no-repeat;
    // background-size: cover;
    const Icon = styled.span`
    color: #010203;
    padding: 2rem;
    font-size: 3rem;
    align-items: center;
    display: flex;
    justify-content:center;
    
    `
    const Title = styled.h3
    `
    padding: 2rem;
    font-size: 4rem;
    text-shadow: 1px 1px #ca361a;

        &:hover {
        text-shadow 2px 2px #ca361a;
    }
    `;
const Info = styled.p`
    padding: 2rem;
    font-size: 2rem;
    text-shadow: 1px 1px #ca361a;
    align-items: center;
    display: flex;
    
        &:hover {
        text-shadow 4px 4px #F21;
        cursor: default
    }
    `;

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaShuttleVan />,
        title: "Airport Shuttle",
        info: "Complimentary shuttle to and from the airport!",
      },
      {
        icon: <FaCookie />,
        title: "Complimentary Cookie",
        info: "Complimentary cookie at check-in!",
      },
      {
        icon: <FaCocktail />,
        title: "Happy Hour",
        info:
          "Join us for a complimentary cocktail during happy hour daily from 4 PM to 5 PM!",
      },
    ],
  };

  render() {
    return (
      <div className="services-center" style={{ backgroundColor: "#eeb940" }}>
        {this.state.services.map((item, index) => {
          return (
            <>
              <article key={index} className="service">
                <Wrapper>
                  <Icon>{item.icon}</Icon>
                  <Title>{item.title}</Title>
                  <Info>{item.info}</Info>
                </Wrapper>
              </article>
            </>
          );
        })}
      </div>
    );
  }
}
