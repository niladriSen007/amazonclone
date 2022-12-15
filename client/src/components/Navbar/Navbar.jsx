import React from "react";
import styled from "styled-components";
import Logo from "../../assets/amazonlogo.png";
// import { AiOutlineMenu } from "react-icons/ai";
// import {BsXLg} from "react-icons/bs"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.scss";
import { Avatar, Badge } from "@mui/material";

const Navbar = () => {
  // const cartCount = useSelector(state=>state.cart)
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <div className="navlogo">
              <NavLink to="/"><img src={Logo} alt="amazon" /></NavLink>
            </div>
            <div className="nav_searchbaar">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for products "
              />
              <div className="search_icon">
                <SearchOutlinedIcon id="search" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="nav_btn">
              <NavLink to="/signin">sign in</NavLink>
            </div>
            <div className="cart_btn">
              <Badge badgeContent={4} color="primary">
                <NavLink to="/products/:id"><ShoppingCartOutlinedIcon id="icon" /></NavLink>
              </Badge>
              <p>Cart</p>
            </div>
            <Avatar className="avtar" style={{ backgroundColor:" blue" }}>N</Avatar>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
