import React from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {Link, useHistory} from "react-router-dom"
import './CanteenMenu.css'

function CanteenMenu () {
    const history = useHistory();
    const listStyle = {
            float: 'left',
            listStyle: 'none',
            border: 'none',
            marginLeft: '5%',
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
        <div className="canteen-menu-screen container-fluid" style={{
            padding: '40px',
            backgroundColor: 'rgb(255,196,60)',
        }}>
             <div className="canteen-menu-container" style={{
                 height: '100vh',
                 backgroundColor: 'white',
                 borderRadius: '5px'
             }}>
                 <Link to="/afterlogin">
                 <button style={{
                 border: 'none',
                 fontSize: '20px'
                }} 
   ><IoMdArrowRoundBack /></button></Link>
            <h1 align='center'>{history.location.state.name}</h1>
            <br />
            <br />  
            <ul>
                <li style={listStyle}>
                    <img style = {imgStyle} alt="some img" 
                    src={history.location.state.img1} />
                    <div style={pStyle}>{history.location.state.item1} <div style={priceStyle}><NumberOfItems price={history.location.state.price1} /></div> </div>
                </li>
                <li style={listStyle}> 
                <img style = {imgStyle} alt="some img" 
                    src={history.location.state.img2} />
                   <div style={pStyle}> {history.location.state.item2} <div style={priceStyle}><NumberOfItems price={history.location.state.price2} /></div> </div>
                </li>
                <li style={listStyle}>
                <img style = {imgStyle} alt="some img" 
                    src={history.location.state.img3} />
                   <div style={pStyle}> {history.location.state.item3} <div style={priceStyle}><NumberOfItems price={history.location.state.price3} /></div></div>
                </li>
                <li style={listStyle}>
                <img style = {imgStyle} alt="some img" 
                    src={history.location.state.img4} />
                   <div style={pStyle}>{history.location.state.item4} <div style={priceStyle}><NumberOfItems price={history.location.state.price4} /></div></div>
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
}}>-</button>
<span style={{color: 'black', marginLeft: '3px'}}>{this.state.item} </span> <button onClick={this.handleAddItem} style={{
    border: 'none',
    backgroundColor: 'rgb(255,196,60)',
    paddingTop: '3.5px',
    paddingBottom: '4px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
}}>+</button>
</span>
)
}
}
export default CanteenMenu