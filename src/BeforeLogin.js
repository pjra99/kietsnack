import React from "react"
import Frames from "./Frames.js"
import {RiAdminLine } from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {FaHamburger} from 'react-icons/fa'
import {FaUtensils} from 'react-icons/fa'
import Canteens from "./Canteens.js"
import bigtreat from "./images/bigtreat.jpg"
import cafeteria from "./images/cafeteria.jpg"
import nishu from "./images/nishu.jpg"
import heroes from "./images/heroes.jpg"
import './BeforeLogin.css'
import {Link} from "react-router-dom"

class BeforeLogin extends React.Component {

     render(){
         return (
            <div class="before-login-screen container-fluid"> 
                <div className="row row1">
                <div className="col-md-4 heading-title">KIET Foods! <FaHamburger /> <FaUtensils />
                </div> 
                <div className="col-md-8">

                </div>
                </div>
                <div className="row heading-lower">
                <div className="col-md-6 heading-lower-phrase">
                     An online site for ordering food from Kiet's canteens
                     </div>
                     <div className="col-md-6">
                     <ul className="header-list">
                    <li className='list'>Home</li>
                    <li className='list'>All Canteens</li>
                    <li className='list'>Contact Developer</li>
                </ul>
                </div>
                </div>
                <div className="row row2">
                <div className="col-md-5"><Frames /></div>
               <div className="col-md-7"> 
               <div  className="row header-center-title"> 
               Get your favourite canteen food <br />delivered at your hostel! <br />
                    </div>
                      <div className="row"> 
                      <div className="col-md-4"></div>
                      <div className="col-md-5">
                      <input type="text" placeholder="What would you like to eat?" className='search' />
                         <button className="search-button"> 
                            <BsSearch />
                        </button>
                        </div>
                      <div className="col-md-3"></div>
                        </div> 
                        <div className="row buttons">    
                        <div className="col-sm-3"></div>    
            <div className="col-sm-3">
               <Link to="/signin"> <button className='signInStu' type="submit">
                            Sign in as Student<BsFillPersonFill />
                        </button>
                        </Link>
                        </div>        
                        <div className="col-sm-1"></div>
                     <div className="col-sm-3">
                         <Link to="adminsignin">
                         <button className='signInAdm' type="submit">
                            Sign in as Administrator <RiAdminLine />
                        </button>
                        </Link>
                        </div> 
                        <div className="col-sm-3"></div>    
                        </div>
                </div>
                </div>
                <div className="row middle">
                    <h2> Order from any of your favourite spots around your college</h2>
                    </div>
                    <div className="row canteen-images">
                    <div className="col-md-1"></div>
                   <div className="col-md-5 img1"><Canteens img={bigtreat} /></div> 
                   <div className="col-md-5 img2"><Canteens img={cafeteria} /> </div> 
                   <div className="col-md-1"></div>
                    </div>
                    <div className="row canteen-images" >
                        <div className="col-md-1"></div>
                        <div className="col-md-5 img3"> <Canteens img={heroes} /></div>
                        <div className="col-md-5 img4"> <Canteens img={nishu} /> </div>
                        <div className="col-md-1"></div>
                    </div>
                <div className="row footer">
                    <h4  className="footer-phrase">
               KIET FOODS | All Rights Reserved &copy;</h4>
                </div>
            </div>
         )
     }
}
export default BeforeLogin