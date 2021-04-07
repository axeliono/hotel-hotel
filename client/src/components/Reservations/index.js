import React from 'react';
import './style.css';



export default function Reservations() {
    return (
        <section>
          <form id="reservation-form">
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="checkInDate">Check-In Date:</label>
                <input type="date" name="checkInDate" />
            </div>
            <div>
                <label htmlFor="checkOutDate">Check-Out Date:</label>
                <input type="date" name="checkOutDate" />
            </div>

            <button data-testid="button" type="submit">Submit</button>
          </form>
        </section>
    )
};