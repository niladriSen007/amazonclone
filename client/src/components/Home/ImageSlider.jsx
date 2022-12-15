import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]


function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };

  return (
    <Carousel {...settings} style={{position:"relative"}}>
        {
            data.map((img,index)=>(
        <Wrap key={img}>
                <img src={img} alt="slider" />
        </Wrap>
            ))
        }
       
    </Carousel>
  )
}

const Carousel = styled(Slider)`

    overflow:hidden;
    ul li button
    {
        &:before
        {
            font-size:10px;
            color: rgb(150,150,171);
        }
    }

    li.slick-active button:before
    {
        color:#111;
    }

    .slick-list
    {
        overflow:hidden;
        // padding:0px 24px;
    }
    button
    {
        z-index:1;
    }
    @media screen and (max-width:468px)
    {
           width:100vw;
    }
`
const Wrap = styled.div`
cursor:pointer;
    img
    {
        width:100%;
        height:22rem;
        object-fit:cover;

        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
@media screen and (max-width:468px)
{
      img
      {
          width:100%;
      }
}
`

export default ImageSlider