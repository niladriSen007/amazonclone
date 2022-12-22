import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/apiCalls";
import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import "./MainComponent.scss";
import ProductSlider from "./ProductSlider";

const MainComponent = () => {

  const dispatch = useDispatch()

  const prod = useSelector(state=>state.product.products)
  // console.log(prod)

  useEffect(()=>{
    getProducts(dispatch)
  },[dispatch])

  

  return (
    <div className="home_section">
      <div className="banner_part">
        <ImageSlider />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <ProductSlider title={"Deal of the day"} prod={prod}/>
        </div>
        <div className="right_slide">
          <h4>Christmas latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
            alt="rightimg"
          />
          <a href="#">see more</a>
        </div>
      </div>
      <ProductSlider title={"Today's Deal"} prod={prod}/>

      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>

      <ProductSlider title={"Best Seller"} prod={prod}/>
      <ProductSlider title={"Upto 80% off"} prod={prod}/>
    </div>
  );
};

export default MainComponent;
