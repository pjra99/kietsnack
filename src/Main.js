import React from "react"
import Frames from "./Frames.js"
import {RiAdminLine } from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {FaHamburger} from 'react-icons/fa'
import {FaUtensils} from 'react-icons/fa'
import ReactDOM from "react-dom"
import SignIn from "./SignIn.js"
import Canteens from "./Canteens.js"
import bigtreat from "./images/bigtreat.jpg"
import cafeteria from "./images/cafeteria.jpg"
import nishu from "./images/nishu.jpg"
import heroes from "./images/heroes.jpg"
import './App.css'
 
class Main extends React.Component {

     render(){
 
            const liStyle = {
                display: 'inline',
                marginRight: '30px'
            }
            function handleSignIn() {
                ReactDOM.render(<SignIn />,document.getElementById('root'));
             }
         return (
            <div class="container-fluid"> 
                <div className="row row1"  style={{
                    backgroundColor: 'rgb(255,196,60)',
                    // padding: '2%',
                    fontFamily:'Fredoka One',}}>
                <div className="col-lg-4" style={{
                    fontSize: '40px',
                    marginLeft: '2%',
                    // paddingBottom: '-2%'
                }}>KIET Foods! <FaHamburger /> <FaUtensils />
                </div> 
                <div className="col-lg-8">

                </div>
                </div>
                <div className="row" style={{
                    backgroundColor: 'rgb(255,196,60)',
                    padding: '0 2% 2%   2%',
                    fontFamily:'Fredoka One',}}>
                {/* <div className="row"> */}
                <div className="col-lg-6" style={{
                    // paddingBottom: '20px',
                             fontSize: '20px'}}>
                     An online site for ordering food from Kiet's canteens
                     </div>
                     <div className="col-lg-6">
                     <ul style={{
                         float:'right',
                        //  marginTop: '-40px'
                     }}>
                    <li  style={liStyle} className='list' onMouseOver="li.Style.style={{
                        color: 'red'
                    }}">Home</li>
                    <li  style={liStyle} className='list'>All Canteens</li>
                    <li  style={liStyle} className='list'>Contact Developer</li>
                </ul>
                </div>
                {/* </div> */}
                </div>

                <div className="row row2" style={{backgroundColor: 'rgb(255,196,60)', paddingBottom: '10px'}}>
                <div className="col-lg-5"><Frames /></div>
               <div className="col-lg-7"> 
               <div  className="row" style={{
                    float: 'right',
                    // marginTop:'-320px',
                    fontSize: '30px',
                    marginRight: '70px',
                    fontFamily: 'Vollkorn',
                    color: '#252525',
                }}>Get your favourite canteen food <br />delivered at your hostel! <br />
                    </div>
                    {/* <div className="row"> */}
                      <div className="row"> 
                      <div className="col-md-7" style={{
                          float: 'right'
                      }}>
                      <input type="text" placeholder="What would you like to eat?" className='search'
                        style={{
                        // float: 'right',
                        // marginRight: '240px',
                        // marginTop: '-110px',
                        border: 'none',
                        backgroundColor: '#efecec',
                        width: '220px',
                        height: '35px',
                        borderRadius : '40px'
                        }}/>
                        <button  style={{   
                            border: 'none',
                            marginLeft: '-30px'
                        }}
                        onClick={()=> ReactDOM.render(<SignIn />, document.getElementById('root'))} >
                            <BsSearch />
                        </button>
                      </div>
                        </div> 
                        {/* <div className="row"> 
                      
                        </div>   */}
                        <div className="row buttons" style={{
                            // display: 'flex',
                            // justifyContent: 'right',
                    //  margin: 'auto',
                    // textAlign: 'center',
                    float: 'right',
                    paddingTop: '5%',
                    }}>        
            <div className="col-sm-3" style={{
            }}>
                <button className='signIn' type="submit" style={{
                     padding: '10px',   
                     marginRight: '-50px',
                     width: '200px',
                     borderRadius: '50px',
                     border: 'none',
                     fontFamily: 'Pragati Narrow',
                     boxShadow: '8px 10px 10px #f89d13',
                     fontFamily: 'Lato',
                     }} onClick = {handleSignIn}>
                            Sign in as Student<BsFillPersonFill />
                        </button>
                        </div>        
                     <div className="col-sm-4">
                         <button className='signIn' type="submit" style={{
                              padding: '10px',
                              marginLeft:'100px',
                              width: '200px',
                              borderRadius: '50px',
                              border: 'none',
                              fontFamily: 'Pragati Narrow',
                              boxShadow: '8px 10px 10px #f89d13',
                              fontFamily: 'Lato'
                         }}>
                            Sign in as Administrator <RiAdminLine />
                        </button>
                        </div> 
                    {/* <br /> */}
                        </div>
                </div>
                </div>
                <div className="row bottom-upper">
                    <h2 style={{
                        // marginLeft: '22%',
                        textAlign: 'center',
                        // marginTop: '20px',   
                        fontFamily: 'Vollkorn',
                    }}> Order from any of your favourite spots around your college</h2>
                    </div>
                    <div className="row">
                   <div className="col-md-6"><Canteens img={bigtreat} /></div> 
                   <div className="col-md-6"><Canteens img={cafeteria} /> </div> 
                    </div>
                    <div className="row" >
                        <div className="col-md-6"> <Canteens img={heroes} /></div>
                        <div className="col-md-6"> <Canteens img={nishu} /> </div>
                    </div>
                <div className="bottom-lower" style={{
                    height: '100px',
                    backgroundColor: '#eeeeee'
                }} align='center'>
                    <h4 
                    style={{paddingTop:'40px',
                opacity: '.8'}}
                    >KIET FOODS | All Rights Reserved &copy;</h4>
                </div>
            </div>
         )
     }
}
export default Main
