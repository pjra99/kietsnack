import React from "react"
import ReactDOM from 'react-dom'
import Main from './Main.js'
import {FaHamburger} from 'react-icons/fa'
import {FaUtensils, FaPizzaSlice} from 'react-icons/fa'
import dosa from './images/dosa.jpeg'
import momos from './images/momos.jpg'
import samosa from './images/samosa.jpg'
import noodles from './images/noodles.jpg'
import {BiCoffeeTogo} from 'react-icons/bi'
import {GiPizzaSlice, GiNoodles, GiChipsBag} from 'react-icons/gi'
import {RiShoppingBasketFill} from 'react-icons/ri'
import './App.css'
import ItemCard from "./ItemCard.js"
import nishu from "./images/slide_1.jpg"
import cafeteria from "./images/slide_2.jpg"
import bigtreat from "./images/slide_3.jpg"
import heroes from "./images/slide_4.jpg"
import amul from "./images/slide_5.jpg"
import CanteenMenu from './CanteenMenu.js'
import patties from './images/patties.jpg'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0
        }

    }
    handleCanteenCard(){
        console.log('Hi!')
    }
    render(){
        const listItemStyle = {
           listStyle: 'none',
           float: 'right',
           marginRight: '50px',
           fontFamily: 'Vollkorn',
           padding: '4px',
           borderRadius: '2px'
        }
        return (
            <div className="container-fluid" style={{
                backgroundColor: 'rgb(255,196,60)',
                height: '250vh',
                padding: '40px',
            }}>
            <div className="container" style={{
                height: '245vh',
                backgroundColor: 'rgb(250, 250, 250)',
                borderRadius: '5px',
                paddingBottom: '20px',
            }}>
                <div className="row">
                <div className="col-md-6" style={{
                    fontSize: '13px',
                    fontFamily: 'Lato',
                    color: '#838383',
                }}>
                <p style={{paddingTop: '10px'}}> <FaHamburger /> <FaUtensils />Welcome to KIET Foods! </p>
                </div>
                    <div className="col-md-6" style={{
                        display: 'flex',
                        float: 'right'
                    }}>
                    <ul style={{
                         paddingTop:'20px'}}>
              <li className='listItem cart' style={{  listStyle: 'none',
           float: 'right',
           fontFamily: 'Vollkorn',
           padding: '4px',
           borderRadius: '2px',
           }}> <RiShoppingBasketFill size={42}/>{this.state.total}</li>
                  <li className='listItem' style={listItemStyle}>Contact Us </li>
                  <li className='listItem' style={listItemStyle} onClick={()=>ReactDOM.render(<Main />, document.getElementById('root'))}>
                      Sign Out
                      </li>
                  <li className='listItem' style={listItemStyle}>Home</li>
              </ul>
                    </div>
                </div>
                <div className="row container-header-lower">
                    <div className="col-lg-6" style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                <p style={{
                    // margin: '50px 0px 0px 80px',
                    fontSize: '36px',
                    fontFamily: 'Dosis',
                    paddingBottom: '-300px',
                    width: '400px'
                }}>It's all about your favourite < br />taste at favourite price!
                </p>
                            </div>
                                <div className="col-md-3" style={{
                                    // marginRight: '12%'
                                }}> <img src={samosa} style={{
                                    width: '180px',
                                    height: '180px',
                                    borderRadius: '10%',
                                }} /> </div>
                                <div className="col-md-3"><img src={dosa}  style={{
                                            width: '180px',
                                            height: '180px',
                                            borderRadius: '10%',
                                }} /> </div>                        
                            </div>
                            <div className="row" >
                                <div className="col-md-6">
                                    <div className="row" style={{
                                        // display: 'flex',
                                        // justifyContent: 'center'
                                    }}>
                                    <input type="text" placeholder="What would you like to eat?" class='search'
                        style={{
                        // float: 'right',
                        marginLeft: '100px',
                        marginTop: '50px',
                        border: 'none',
                        backgroundColor: '#efecec',
                        width: '220px',
                        height: '35px',
                        borderRadius : '10px'
                        }}/> 
                        <button style={{
                            backgroundColor: 'rgb(255,196,60)',
                            border: 'none',
                            borderRadius: '3px',
                            height: '35px',
                            width:'50px',
                            fontFamily: 'Nunito',

                            }}> Go </button>
                                    </div>
                                    {/* <div className="row"> */}
  <div className="row"><p style={{
                                margin: '15px 0px 0px 100px',
                                fontFamily: 'Lato',
                                color: '#838383',
                                fontFamily: 'Nunito',
                                fontSize: '13px'
                            }}> Order below 100/- include additional <br /> delivery charges..<br />
                             <button style={{
                                  backgroundColor: 'rgb(255,196,60)',
                                  border: 'none',
                                  borderRadius: '3px',
                                  height: '35px',
                                  width:'100',
                                  fontFamily: 'Nunito',
                                  marginTop: '10px'
                             }}>
                                 Learn more
                                 </button>
                                 </p>
                            <h2 align='center' style={{
                                margin: '30px 0px -60px 0px',
                                fontFamily: 'Noto Sans TC',
                                color: '#838383',
                            }}>What is your mood Today?</h2>
                            <CategoryBox />
                             </div>
                                    {/* </div> */}

                            
                                </div>
                          
                            <div className="col-lg-6" style={{
                                marginTop: '4%',
                                // marginRight: '5%'
                            }}>   
                           <div className="col-md-3" style={{
                               marginRight: '29%',
                               marginLeft: '-3%'
                           }}>  <img src={momos} style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '10%',
                           }}/></div>
                                <div className="col-md-3"><img src={noodles}  style={{
                                            width: '180px',
                                            height: '180px',
                                            borderRadius: '10%',
                                            // marginLeft: '30%'
                                }} /> 
                                </div>
                                </div>
                            </div>
               <div className="row main">
<h1 style={{
display: 'flex',
justifyContent: 'center',
verticalAlign: 'center',
fontFamily: 'Vollkorn',
color: '#333333'
}}>
    Most ordered Ones!</h1>
  <ItemCard total = {this.state.total} />

     <div>
         <h2 style={{
               float: 'right',
               width: '100%',
               marginTop: '6%',
               fontFamily: 'Noto Sans TC',
            color: '#333333',
            opacity: '.8'
         }} align='center'> Order From your favourite Spots!</h2>
       <div onClick={()=>ReactDOM.render(<CanteenMenu
        name = "Heroes"
        item1 = "Maggie" img1="https://i.pinimg.com/564x/74/a0/48/74a04839fca353e15ff7c935b67434e2.jpg" price1={25}
        item2 = "Pasta"  img2="https://i.pinimg.com/564x/e9/f7/80/e9f780aa12026483a928455f68f3a0ef.jpg" price2={30}
        item3 = "Oreo-Shake" img3="https://i.pinimg.com/564x/4a/f8/ea/4af8ea98d663fe106cd64ca016b961b0.jpg" price3={20}
        item4 = "Samosa" img4="https://i.pinimg.com/564x/df/34/29/df3429c725467f4f8d090a15940048f7.jpg" price4={5}
        />, document.getElementById('root'))
         }> 
         <CanteenCard img={heroes} canteen="Heroes" />
         </div> 
         <div onClick={()=>ReactDOM.render(<CanteenMenu
        name = "Nishu's Cafe"
        item1 = "Burger" img1="https://i.pinimg.com/564x/f1/ce/b0/f1ceb0620a4b9e14f87949121ea44e49.jpg" price1={25}
        item2 = "Veg Doubles Pizza"  img2="https://i.pinimg.com/564x/0e/22/8b/0e228b041a84d986b26b8a63f8ec729f.jpg" price2={30}
        item3 = "Pasta" img3="https://i.pinimg.com/564x/c7/20/13/c7201397a0d880f03f1e1c099daefb2a.jpg" price3={20}
        item4 = "Black Forest Pastry" img4="https://i.pinimg.com/564x/18/2c/9e/182c9e99cfbb04867b3c76dad67d01d8.jpg" price4={5}
        />, document.getElementById('root'))
         }>
         <CanteenCard img={nishu} canteen="Nishu's"/>
         </div>
         <div onClick={()=>ReactDOM.render(<CanteenMenu
        name = "Cafeteria"
        item1 = "Burger" img1="https://i.pinimg.com/564x/02/d7/9c/02d79ce0a82b68847f819640b8d1226f.jpg" price1={25}
        item2 = "Pasta"  img2="https://i.pinimg.com/564x/e9/f7/80/e9f780aa12026483a928455f68f3a0ef.jpg" price2={30}
        item3 = "Oreo-Shake" img3="https://i.pinimg.com/564x/4a/f8/ea/4af8ea98d663fe106cd64ca016b961b0.jpg" price3={20}
        item4 = "Burger" img4="https://i.pinimg.com/564x/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg" price4={5}
        />, document.getElementById('root'))
         }>
         <CanteenCard img={cafeteria} canteen='Cafeteria' />
         </div>
         <div onClick={()=>ReactDOM.render(<CanteenMenu
        name = "Amul"
        item1 = "Maggie" img1="https://i.pinimg.com/564x/74/a0/48/74a04839fca353e15ff7c935b67434e2.jpg" price1={25}
        item2 = "Momos"  img2={momos}  price2={30}
        item3 = "Patties" img3={patties} price3={20}
        item4 = "Samosa" img4="https://i.pinimg.com/564x/df/34/29/df3429c725467f4f8d090a15940048f7.jpg" price4={5}
        />, document.getElementById('root'))
         }>
         <CanteenCard img={amul} canteen='Amul'/>
         </div>
         <div onClick={()=>ReactDOM.render(<CanteenMenu
        name = "Big Treat"
        item1 = "Maggie" img1="https://i.pinimg.com/564x/74/a0/48/74a04839fca353e15ff7c935b67434e2.jpg" price1={25}
        item2 = "Momos"  img2={momos} price2={30}
        item3 = "Patties" img3={patties} price3={20}
        item4 = "Samosa" img4="https://i.pinimg.com/564x/df/34/29/df3429c725467f4f8d090a15940048f7.jpg" price4={5}
        />, document.getElementById('root'))
         }>
         <CanteenCard img={bigtreat} canteen='Big Treat'/>
         </div>
         </div>
 </div>
            </div>
            </div>
        )
    }
}

function CategoryBox(){
    const cellStyle = {
        float: 'left',
        marginLeft: '60px',
        backgroundColor: '#f8f1f1',
        paddingTop: '10px',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        paddingBottom: '-20px'
    }
    const pStyle = {
        backgroundColor: 'rgb(255,196,60)',
        // paddingBottom: '10px',
        width: '70px',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        fontFamily: 'Lato',
        marginBottom: '-10px'
    }
    return(
        <div class='categoryboxes' style={{margin: '100px 0px 0px 0px'}}>
     <span class='item' align='center' style={cellStyle}><GiPizzaSlice size={42}/><p align='center' style={pStyle}>Fast Food</p></span>
     <span class='item' align='center' style={cellStyle}><GiChipsBag size={42}/><p align='center' align='center'  style={pStyle}>Packed <br/>Snacks</p></span>
     <span class='item' align='center' style={cellStyle}><GiNoodles size={42}/><p align='center'  style={pStyle}>Noodles</p></span>
     <span class='item' align='center' style={cellStyle}><BiCoffeeTogo size={42}/><p align='center' style={pStyle}>Drinks</p></span>
        </div>
    )
}
function CanteenCard(props){
    return (
        <div className='canteenCard' style={{
            float: 'left',
            margin: '40px 0px 0px 30px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px'
        }}>
<img src={props.img} style={{
    width: '200px',
    height: '170px',
    borderRadius: ''
}} />
<p align='center' style={{
    backgroundColor: '#ffc93c',
    marginTop: '-4px',
    fontFamily: 'Lato',
    fontSize: '32px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    // paddingBottom: '10px'
    marginBottom: '-10px'
}}>{props.canteen}</p>
        </div>
    )
}

export default App
