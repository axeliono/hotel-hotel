//maybe add icons for services such as shuttles cocktails etc.

import React, { Component } from 'react';
import { FaShuttleVan } from 'react-icons/fa';

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
                <Title title="Hotel-Hotel Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }

}