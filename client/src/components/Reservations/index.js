import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './style.css'
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
justify-content: space-evenly;
flex-direction: row;;
    `;
const Banner = styled.section`
display: flex;
justify-content: center;
background-color: #F21;
width: 100%
Height: auto;
font-size: 2rem;

`

export default function HotelCalendar() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  return (
      <>
      <Banner>
          <h1>Select your dates!</h1>

      </Banner>
      <Wrapper>
      <p>Arrive: {startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <p>Depart: {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      </Wrapper>
    <div>
      {/* <p>Currently selecting: {focus}.</p> */}
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={enGB}
        />
    </div>
        </>
  )
}