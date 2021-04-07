import React from 'react';
import Nav from '../Nav';
import styled from 'styled-components';


const Wallpaper = styled.div`
background-image: url("https://i.imgur.com/eFZozAu.jpg");
`
export default function Header() {
    return (
        <>
        <Wallpaper>
        <Nav/>
        </Wallpaper>
        </>
    )
}