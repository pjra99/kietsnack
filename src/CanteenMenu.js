import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {IoMdArrowRoundBack} from 'react-icons/io'

function CanteenMenu (props) {
    const listStyle = {
            float: 'left',
            listStyle: 'none',
            border: 'none',
            marginLeft: '5%',
            // marginLeft:'20%'
            boxShadow: '8px 12px 12px #bbbbbb'
    }
    const imgStyle = {
        width: '200px',
        height: '200px',
        border: 'none',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    }
    const pStyle = {
        marginLeft: '5%',
        fontFamily: 'Vollkorn',
        paddingBottom: '5px'
    }
const priceStyle = {
color: '#54e346',
fontFamily: 'Lato'
}
    return (
        <div className="container" style={{
            height: '100vh',
            padding: '40px',
            backgroundColor: 'rgb(255,196,60)',
        }}>
             <div className="main" style={{
                 height: '100vh',
                 backgroundColor: 'white',
                 borderRadius: '5px'
             }}>
                 <button style={{
                 border: 'none',
                 fontSize: '20px'
                }} 
                 onClick = {()=> ReactDOM.render(<App />, document.getElementById('root'))}><IoMdArrowRoundBack /></button>
            <h1 align='center'>{props.name}</h1>
            <br />
            <br />  
            <ul>
                <li style={listStyle}>
                    <img style = {imgStyle} 
                    src={props.img1} />
                    <p style={pStyle}>{props.item1} <p style={priceStyle}><NumberOfItems price={props.price1} /></p> </p>
                </li>
                <li style={listStyle}>
                <img style = {imgStyle} 
                    src={props.img2} />
                   <p style={pStyle}> {props.item2} <p style={priceStyle}><NumberOfItems price={props.price2} /></p> </p>
                </li>
                <li style={listStyle}>
                <img style = {imgStyle} 
                    src={props.img3} />
                   <p style={pStyle}> {props.item3} <p style={priceStyle}><NumberOfItems price={props.price3} /></p></p>
                </li>
                <li style={listStyle}>
                <img style = {imgStyle} 
                    src={props.img4} />
                   <p style={pStyle}>{props.item4} <p style={priceStyle}><NumberOfItems price={props.price4} /></p></p>
                </li>
            </ul>
        </div>
        </div>
      
    )
}
class NumberOfItems extends React.Component {
    constructor(props){
        super(props);
      this.state = {
          item: 0,
          total: this.props.price
      }
      this.handleAddItem = this.handleAddItem.bind(this)
      this.handleRemoveItem = this.handleRemoveItem.bind(this)
    }
    handleAddItem(){
        console.log('Got clicked')
        this.setState({
            item: this.state.item + 1,
        });
        if(this.state.item>0){
            this.setState({
              total: this.state.total + this.props.price
            })
    }
}
    handleRemoveItem(){
      if(this.state.item> 0 ){
        this.setState({
            item: this.state.item - 1,
        });
    }
    if(this.state.total >this.props.price){
        this.setState({
          total: this.state.total - this.props.price
        })
      }
    }
    render(){

return (
   <span style={{
    //    border: '1px solid black',
       color: 'b',
       borderRadius: '5px'
   }}> {this.state.total} Rs <button onClick={this.handleRemoveItem} style={{
    border: 'none',
    backgroundColor: 'rgb(255,196,60)',
    paddingTop: '3.5px',
    paddingBottom: '4px',
    marginLeft: '10px',
    borderBottomLeftRadius: '5px',
    borderTopLeftRadius: '5px',
}}>-</button><span style={{color: 'black', marginLeft: '3px'}}>{this.state.item} </span> <button onClick={this.handleAddItem} style={{
    border: 'none',
    backgroundColor: 'rgb(255,196,60)',
    paddingTop: '3.5px',
    paddingBottom: '4px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
}}>+</button></span>
)
}
}
export default CanteenMenu