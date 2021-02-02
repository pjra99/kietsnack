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
        const buttonStyle ={
                padding: '10px',
                marginLeft: '20px',
                borderRadius: '50px',
                border: 'none',
                fontFamily: 'Pragati Narrow',
                boxShadow: '8px 10px 10px #f89d13',
                fontFamily: 'Lato'
        }
            
            const liStyle = {
                display: 'inline',
                marginRight: '30px'
            }
            function handleSignIn() {
                ReactDOM.render(<SignIn />,document.getElementById('root'));
             }
         return (
            <div> 
                <div className="header"  style={{
                    backgroundColor: 'rgb(255,196,60)',
                    padding: '2%',
                    fontFamily:'Fredoka One',}}>
                <h1> KIET Foods! <FaHamburger /> <FaUtensils /></h1>
                <h3 style={{paddingBottom: '20px'}}>
                     An online site for ordering food from Kiet's canteens
                     </h3>
                     <ul style={{
                         float:'right',
                         marginTop: '-40px'
                     }}>
                    <li  style={liStyle} className='list' onMouseOver="li.Style.style={{
                        color: 'red'
                    }}">Home</li>
                    <li  style={liStyle} className='list'>All Canteens</li>
                    <li  style={liStyle} className='list'>Contact Developer</li>
                </ul>
                </div>
                <div style={{backgroundColor: 'rgb(255,196,60)', paddingBottom: '10px'}}>
                <Frames />
                <h1 style={{
                    float: 'right',
                    marginTop:'-320px',
                    marginRight: '70px',
                    fontFamily: 'Vollkorn',
                    color: '#252525'
                }}>Get your favourite canteen food <br />delivered at your hostel! <br />
                    </h1>
                    <div class="buttons" style={{
                    float: 'right',
                    marginRight: '190px',
                    marginTop: '-180px'
                    }}>        
                    <button className='signIn' type="submit" style={buttonStyle} onClick = {handleSignIn}>
                            Sign in as Student<BsFillPersonFill />
                        </button>
                      <button className='signIn' type="submit" style={buttonStyle}>
                            Sign in as Administrator <RiAdminLine />
                        </button>
                    <br />
                        </div>
                        <input type="text" placeholder="What would you like to eat?" class='search'
                        style={{
                        float: 'right',
                        marginRight: '240px',
                        marginTop: '-110px',
                        border: 'none',
                        backgroundColor: '#efecec',
                        width: '220px',
                        height: '35px',
                        borderRadius : '40px'
                        }}/>
                             <button  style={{
                            float: 'right',
                            marginRight: '250px',
                            marginTop: '-100px',   
                            border: 'none'
                        }}
                        onClick={()=> ReactDOM.render(<SignIn />, document.getElementById('root'))} >
                            <BsSearch/>
                        </button> 
                </div>
                <div className="bottom-upper">
                    <h2 style={{
                        marginLeft: '22%',
                        marginTop: '20px',
                        fontFamily: 'Vollkorn',
                    }}> Order from any of your favourite spots around your college</h2>
                    <Canteens img={bigtreat} height='250px' width='350px'/>
                    <Canteens img={cafeteria} /> <br/>
                    <Canteens img={nishu} />
                    <Canteens img={heroes} />
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