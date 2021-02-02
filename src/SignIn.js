import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main.js"
import App from "./App.js"
import {IoMdArrowRoundBack} from 'react-icons/io'

class SignIn extends React.Component {
  render() {
    function handleBackButton() {
ReactDOM.render(<Main />, document.getElementById('root'))
    }
    function handleGetOTP(){
      ReactDOM.render(<EnterOTP />, document.getElementById('root'))
    }
      return (
          <div>
          <div className="header" style={{
            backgroundColor: 'rgb(255,196,60)',
            height: '100px',
            fontFamily: 'Vollkorn'
        }}>
           <h3 align='center'style={{paddingTop:'35px'}}><button style={{
             marginRight:'10px',
             border: 'none',
             borderRadius:'2px'
          }} onClick={handleBackButton}> <IoMdArrowRoundBack /></button> Just enter your number and get the OTP to Sign in! </h3> <br />
          <input type='text' placeholder='+91' style={{
            marginLeft: '43%',
            borderRadius: '5px',
            border:'1px solid black',
            height: '20px',
          }} /> <button style={{
                                  backgroundColor: '#0779e4',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '3px',
                                  height: '25px',
                                  width:'100',
                                  fontFamily: 'Nunito'
          }}
          onClick={handleGetOTP}>Go</button>
          </div>
          <div className="main" style={{
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
    function handleBackButton() {
ReactDOM.render(<Main />, document.getElementById('root'))
    }
    function handleSignIn(){
        ReactDOM.render(<App />, document.getElementById('root'))
    }
      return (
          <div>
          <div align='center' className="header" style={{
            backgroundColor: 'rgb(255,196,60)',
            height: '100px',
            fontFamily: 'Vollkorn'
        }}>
           <h3 align='center' style={{padding:'35px 0px 0px 0px'}}><button style={{
             marginRight:'10px',
             border: 'none',
             borderRadius:'2px'
          }} onClick={handleBackButton}> <IoMdArrowRoundBack /></button> Enter the OTP Recieved! </h3> <br />
          <input type='text' placeholder='XXXX' style={{
            // marginLeft: '43%',
            borderRadius: '5px',
            border:'1px solid black',
            height: '20px'
          }} /> <button style={{
            backgroundColor: '#0779e4',
            color: 'white',
                                  border: 'none',
                                  borderRadius: '3px',
                                  height: '25px',
                                  width:'100',
                                  fontFamily: 'Nunito',
          }}onClick={handleSignIn}>Go</button>
          </div>
          <div className="main" style={{
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

export default SignIn