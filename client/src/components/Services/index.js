//maybe add icons for services such as shuttles cocktails etc.

import React, { Component } from 'react';
import { FaShuttleVan, FaCookie, FaCocktail } from 'react-icons/fa';
import styled from 'styled-components';


const Wrapper = styled.section`
    display: flex;
    height: 100%
    width: 80%
    justify-content: space-evenly;
    `;
const Icon = styled.span`
    color: orange;
    padding: 2rem;
    `
const Title = styled.h3
    `
    padding: 2rem;
    
    `
const Info = styled.p
    `
    padding: 2rem;
    `

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaShuttleVan />,
                title: "Airport Shuttle",
                info: "Complimentary shuttle to and from the airport!"
            },
            {
                icon: <FaCookie />,
                title: "Complimentary Cookie",
                info: "Complimentary cookie at check-in!"
            },
            {
                icon: <FaCocktail />,
                title: "Happy Hour",
                info: "Join us for a complimentary cocktail during happy hour daily from 4 PM to 5 PM!"
            }
        ]
    }
    
    
    render() {

        return (
            <section className="services">
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service" style={{display: "flex", justifyContent: "space-evenly", alignItems:"center"}}>
                                <Wrapper>
                                <Icon>{item.icon}</Icon>
                                <Title>{item.title}</Title>
                                <Info>{item.info}</Info>
                                </Wrapper>
                            </article>
                        )
                    })}
                </div>
            </section>
                    
        )
    }

}