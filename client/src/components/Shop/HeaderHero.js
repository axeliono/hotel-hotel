import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Button, Container, Grid } from "@material-ui/core";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2100,
  centerPadding: '150px'
};

const HeaderHero = () => {
  return (
    <header>
      <Container justify="center">
        <Grid container spacing={1} justify="center" shadow>
          <Grid container item xs={12} spacing={1} justify="center">
            <Grid container item xs={2} justify="center">
              <Button color="inherit">
                <strong>Home</strong>
              </Button>
            </Grid>
            <Grid container item xs={2} justify="center">
              <Button color="inherit">Toys</Button>
            </Grid>
            <Grid container item xs={2} justify="center">
              <Button color="inherit">Household Supplies</Button>
            </Grid>
            <Grid container item xs={2} justify="center">
              <Button color="inherit">Food</Button>
            </Grid>
            <Grid container item xs={2} justify="center">
              <Button color="inherit">Shop All</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Slider {...settings} className="sliderDivs">
          <div>
            <img src="https://i.imgur.com/us6gMou.jpg" alt="alt1" />
          </div>
          <div>
            <img src="https://i.imgur.com/qVqdkRm.jpg" alt="alt2" />
          </div>
          <div>
            <img src="https://i.imgur.com/4L5JS9Z.jpg" alt="alt3" />
          </div>
          <div>
            <img src="https://i.imgur.com/AhxPlW9.jpg" alt="alt4" />
          </div>
        </Slider>
      </Container>
    </header>
  );
};

export default HeaderHero;
