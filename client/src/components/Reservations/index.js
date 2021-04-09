import React, { useState } from 'react'
import { format, isToday } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './style.css'
import styled from 'styled-components'
import startOfToday from 'date-fns/startOfToday'

const Wrapper = styled.section`
display: flex;
justify-content: space-evenly;
flex-direction: row;
font-size: 1.2rem;
    `;
const Banner = styled.section`
display: flex;
justify-content: center;
background-color: #ca361a;
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
   
      <Wrapper>
      <h2>Arrive 2pm: {startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</h2>
      <p>Depart 11am: {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      </Wrapper>
    <div>
      {/* <p>Currently selecting: {focus}.</p> */}
      <DateRangePickerCalendar
        minimumDate= {Date}
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={enGB}
        />
        <Wrapper>
        <p>Arrive 2pm: {startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
        <p>Depart 11am: {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
        </Wrapper>
    </div>
        </>
  )
}