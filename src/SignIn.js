import React from "react"
import {IoMdArrowRoundBack} from 'react-icons/io'
import {Link} from "react-router-dom"

class SignIn extends React.Component {
  render() {

      return (
          <div className="container-fluid">
          <div className="row header" style={{
            backgroundColor: 'rgb(255,196,60)',
            height: '100px',
            fontFamily: 'Vollkorn'
        }}>
           <h3 align='center'style={{paddingTop:'35px'}}>
             <Link to="/">
             <button style={{
             marginRight:'10px',
             border: 'none',
             borderRadius:'2px'
          }} > <IoMdArrowRoundBack /></button> </Link>Just enter your number and get the OTP to Sign in! </h3> <br />
          <input type='text' placeholder='+91' style={{
            marginLeft: '43%',
            borderRadius: '5px',
            border:'1px solid black',
            height: '20px',
          }} /> 
          <Link to="/enterotp"><button style={{
                                  backgroundColor: '#0779e4',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '3px',
                                  height: '25px',
                                  width:'100',
                                  fontFamily: 'Nunito'
          }}> Go</button> </Link>
          </div>
          <div className="main row" style={{
            margin:'15% 0% 0% 0%',
            fontFamily: 'Vollkorn',
            fontSize: '32px'
          }}>
           <p align='center'>You are a step away from your delcious Food!</p> 
          </div>
          </div>
      )
  }
}

class EnterOTP extends React.Component {
  render() {
      return (
          <div className="container-fluid">
          <div align='center' className="row header" style={{
            backgroundColor: 'rgb(255,196,60)',
            height: '100px',
            fontFamily: 'Vollkorn'
        }}>
           <h3 align='center' style={{padding:'35px 0px 0px 0px'}}>
             <Link to="/signin">
             <button style={{
             marginRight:'10px',
             border: 'none',
             borderRadius:'2px'
          }} > <IoMdArrowRoundBack /></button> 
          </Link>
          Enter the OTP Recieved! </h3> <br />
          <input type='text' placeholder='XXXX' style={{
            borderRadius: '5px',
            border:'1px solid black',
            height: '20px'
          }} /> 
          <Link to="/afterLogin"><button style={{
            backgroundColor: '#0779e4',
            color: 'white',
                                  border: 'none',
                                  borderRadius: '3px',
                                  height: '25px',
                                  width:'100',
                                  fontFamily: 'Nunito',
          }}>Go</button></Link>
          </div>
          <div className="row main" style={{
           margin:'15% 0% 0% 0%',
           fontSize: '32px',
           fontFamily: 'Vollkorn'
          }}>
            <p align='center'> You are a step away from your Delicious Food!</p>
          </div>
          </div>
      )
  }
}

export {SignIn, EnterOTP}