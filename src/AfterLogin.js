import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import dosa from "./images/dosa.jpeg";
import momos from "./images/momos.jpg";
import samosa from "./images/samosa.jpg";
import noodles from "./images/noodles.jpg";
import { BiCoffeeTogo } from "react-icons/bi";
import { GiPizzaSlice, GiNoodles, GiChipsBag } from "react-icons/gi";
import { RiShoppingBasketFill } from "react-icons/ri";
import "./AfterLogin.css";
import ItemCard from "./ItemCard.js";
import nishu from "./images/slide_1.jpg";
import cafeteria from "./images/slide_2.jpg";
import bigtreat from "./images/slide_3.jpg";
import heroes from "./images/slide_4.jpg";
import amul from "./images/slide_5.jpg";
import patties from "./images/patties.jpg";
import maggie from "./images/maggie.jpeg";
import masaladosa from "./images/dosa2.jpeg";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./redux/Shopping/shopping-actions";
// import './redux/Shopping/shopping-reducer.js'
import * as actionTypes from "./redux/Shopping/shopping-types";
import { useState } from "react";

function AfterLogin(props) {
  const [itemCount, setItemCount] = useState(0);
  const history = useHistory();

  return (
    <div
      className="after-login-screen container-fluid"
      style={{
        backgroundColor: "rgb(255,196,60)",
        padding: "40px",
      }}
    >
      <div className="after-login-container">
        <div className="row">
          <div className="col-md-6 header-title">
            <p>
              {" "}
              <FaHamburger /> <FaUtensils />
              Welcome to KIET Foods!{" "}
            </p>
          </div>
          <div className="col-md-6 header-list">
            <ul>
              <li className="listItem cart" style={{}}>
                {" "}
                <RiShoppingBasketFill size={42} />
              </li>
              <li className="listItem">Contact Us </li>
              <Link to="/">
                <li className="listItem">Sign Out</li>
              </Link>
              <li className="listItem">Home</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 upper-left-column">
            <div className="row ">
              <div className="col-md-2"></div>

              <div className="col-md-10 main-title">
                {" "}
                <p>
                  It's all about your favourite <br />
                  taste at favourite price!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-10 input-section">
                <input
                  type="text"
                  className="input"
                  placeholder="What would you like to eat?"
                />
                <button className="search-button"> Go </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-11">
                <p className="text-below-input">
                  Order below 100/- include additional <br /> delivery charges..
                  <br />
                  <button className="more-button">Learn more</button>
                </p>
              </div>
            </div>
            <div className="row">
              <h2 align="center" className="second-title">
                What is your mood Today?
              </h2>
              <CategoryBox />
            </div>
          </div>
          <div className="col-md-6 upper-left-column">
            <div
              className="row left-col-row0"
              style={{
                height: "1em",
              }}
            ></div>
            <div className="row left-col-row1">
              <div className="col-md-6 img1">
                {" "}
                <img src={samosa} alt="some img" />{" "}
              </div>
              <div className="col-md-6 img2">
                <img src={dosa} alt="some img" />{" "}
              </div>
            </div>
            <div
              className="row left-col-row2"
              style={{
                height: "1em",
              }}
            ></div>
            <div className="row left-col-row3">
              <div className="col-md-6 img1">
                {" "}
                <img src={momos} alt="momos" />{" "}
              </div>
              <div className="col-md-6 img2">
                <img src={noodles} alt="noodles" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row main">
          <div className="row">
            <h1 className="item-card-section-title">Most ordered Ones!</h1>
          </div>
          <div className="row item-card-section">
            <ItemCard img={maggie} name="Heroes" />
            <ItemCard img={masaladosa} name="Cafeteria" />
            <ItemCard img={momos} name="Amul" />
            <ItemCard img={patties} name="Big Treat" />
          </div>
          <div className="row canteen-cards">
            <h2 className="bottom-section-title">
              {" "}
              Order From your favourite Spots!
            </h2>
            <div
              onClick={() =>
                history.push({
                  pathname: "/canteenmenu",
                  state: {
                    name: "Cafeteria",
                    item1: "Burger",
                    item2: "Pasta",
                    item3: "Oreo-Shake",
                    item4: "Burger",
                    img1: "https://i.pinimg.com/564x/02/d7/9c/02d79ce0a82b68847f819640b8d1226f.jpg",
                    img2: "https://i.pinimg.com/564x/e9/f7/80/e9f780aa12026483a928455f68f3a0ef.jpg",
                    img3: "https://i.pinimg.com/564x/4a/f8/ea/4af8ea98d663fe106cd64ca016b961b0.jpg",
                    img4: "https://i.pinimg.com/564x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg",
                    price1: 25,
                    price2: 30,
                    price3: 20,
                    price4: 35,
                  },
                })
              }
            >
              <CanteenCard img={heroes} canteen="Heroes" />
            </div>
            <div
              onClick={() =>
                history.push({
                  pathname: "/canteenmenu",
                  state: {
                    name: "Cafeteria",
                    item1: "Burger",
                    item2: "Pasta",
                    item3: "Oreo-Shake",
                    item4: "Burger",
                    img1: "https://i.pinimg.com/564x/02/d7/9c/02d79ce0a82b68847f819640b8d1226f.jpg",
                    img2: "https://i.pinimg.com/564x/e9/f7/80/e9f780aa12026483a928455f68f3a0ef.jpg",
                    img3: "https://i.pinimg.com/564x/4a/f8/ea/4af8ea98d663fe106cd64ca016b961b0.jpg",
                    img4: "https://i.pinimg.com/564x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg",
                    price1: 25,
                    price2: 30,
                    price3: 20,
                    price4: 35,
                  },
                })
              }
            >
              <CanteenCard img={nishu} canteen="Nishu's" />
            </div>
            <div
              onClick={() =>
                history.push({
                  pathname: "/canteenmenu",
                  state: {
                    name: "Cafeteria",
                    item1: "Burger",
                    item2: "Pasta",
                    item3: "Oreo-Shake",
                    item4: "Burger",
                    img1: "https://i.pinimg.com/564x/02/d7/9c/02d79ce0a82b68847f819640b8d1226f.jpg",
                    img2: "https://i.pinimg.com/564x/e9/f7/80/e9f780aa12026483a928455f68f3a0ef.jpg",
                    img3: "https://i.pinimg.com/564x/4a/f8/ea/4af8ea98d663fe106cd64ca016b961b0.jpg",
                    img4: "https://i.pinimg.com/564x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg",
                    price1: 25,
                    price2: 30,
                    price3: 20,
                    price4: 35,
                  },
                })
              }
            >
              <CanteenCard img={cafeteria} canteen="Cafeteria" />
            </div>
            <div
              onClick={() =>
                history.push({
                  pathname: "/canteenmenu",
                  state: {
                    name: "Cafeteria",
                    item1: "Burger",
                    item2: "Pasta",
                    item3: "Oreo-Shake",
                    item4: "Burger",
                    img1: "https://i.pinimg.com/564x/02/d7/9c/02d79ce0a82b68847f819640b8d1226f.jpg",
                    img2: "https://i.pinimg.com/564x/e9/f7/80/e9f780aa12026483a928455f68f3a0ef.jpg",
                    img3: "https://i.pinimg.com/564x/4a/f8/ea/4af8ea98d663fe106cd64ca016b961b0.jpg",
                    img4: "https://i.pinimg.com/564x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg",
                    price1: 25,
                    price2: 30,
                    price3: 20,
                    price4: 35,
                  },
                })
              }
            >
              <CanteenCard img={amul} canteen="Amul" />
            </div>
            <div
              onClick={() =>
                history.push({
                  pathname: "/canteenmenu",
                  state: {
                    name: "Cafeteria",
                    item1: "Burger",
                    item2: "Pasta",
                    item3: "Oreo-Shake",
                    item4: "Burger",
                    img1: "https://i.pinimg.com/564x/02/d7/9c/02d79ce0a82b68847f819640b8d1226f.jpg",
                    img2: "https://i.pinimg.com/564x/e9/f7/80/e9f780aa12026483a928455f68f3a0ef.jpg",
                    img3: "https://i.pinimg.com/564x/4a/f8/ea/4af8ea98d663fe106cd64ca016b961b0.jpg",
                    img4: "https://i.pinimg.com/564x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg",
                    price1: 25,
                    price2: 30,
                    price3: 20,
                    price4: 35,
                  },
                })
              }
            >
              <CanteenCard img={bigtreat} canteen="Big Treat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryBox() {
  const cellStyle = {
    float: "left",
    marginLeft: "60px",
    backgroundColor: "#f8f1f1",
    paddingTop: "10px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    paddingBottom: "-20px",
  };
  const pStyle = {
    backgroundColor: "rgb(255,196,60)",
    width: "70px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    fontFamily: "Lato",
    marginBottom: "-10px",
  };
  return (
    <div className="categoryboxes" style={{ margin: "100px 0px 0px 0px" }}>
      <span className="item" align="center" style={cellStyle}>
        <GiPizzaSlice size={42} />
        <p align="center" style={pStyle}>
          Fast Food
        </p>
      </span>
      <span className="item" align="center" style={cellStyle}>
        <GiChipsBag size={42} />
        <p align="center" style={pStyle}>
          Packed <br />
          Snacks
        </p>
      </span>
      <span className="item" align="center" style={cellStyle}>
        <GiNoodles size={42} />
        <p align="center" style={pStyle}>
          Noodles
        </p>
      </span>
      <span className="item" align="center" style={cellStyle}>
        <BiCoffeeTogo size={42} />
        <p align="center" style={pStyle}>
          Drinks
        </p>
      </span>
    </div>
  );
}

function CanteenCard(props) {
  return (
    <div
      className="canteenCard"
      style={{
        float: "left",
        margin: "40px 0px 0px 30px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <img
        src={props.img}
        alt="item"
        style={{
          width: "200px",
          height: "170px",
          borderRadius: "",
        }}
      />
      <p
        align="center"
        style={{
          backgroundColor: "#ffc93c",
          marginTop: "-4px",
          fontFamily: "Lato",
          fontSize: "32px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          marginBottom: "-10px",
        }}
      >
        {props.canteen}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (currentItem) => dispatch(addToCart(currentItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AfterLogin);
