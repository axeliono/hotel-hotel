import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';



export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={4}
            >
                <Slider>
                    <Slide index={0}>https://i.imgur.com/us6gMou.jpg</Slide>
                    <Slide index={1}>https://i.imgur.com/AhxPlW9.jpg</Slide>
                    <Slide index={2}>https://i.imgur.com/4L5JS9Z.jpg</Slide>
                    <Slide index={3}>https://i.imgur.com/wjDvUT8.jpg</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}