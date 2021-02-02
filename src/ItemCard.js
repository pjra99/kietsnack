import React from 'react'
import maggie from './images/maggie.jpeg'
import masaladosa from './images/dosa2.jpeg'
import momos from './images/momos2.jpeg'
import patties from './images/patties.jpg'

class ItemCard extends React.Component {

    render(){
        const imgStyle = 
            {
                width: '200px',
                height: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftwRadius: '10px'
              }
        const spanStyle = {
            float: 'left',
           marginRight: '50px',
           backgroundColor: 'rbg(255, 255,255)',
           fontFamily: 'Lato',
           borderRadius: '10px',
           boxShadow: '6px 12px 12px 1px #c1c1c1'
        }
        const pStyle = {
            marginLeft: '2%'
        }
        const listStyle = {
            color: '#54e346'
        }
        return (
            <div className= 'itemCard' style={{
                float: 'right',
                margin: '50px 70px 0px 0px',
            }}>
              <span style={spanStyle} >
                  <img style={imgStyle} src={maggie} /> 
                  <p style={pStyle}>Maggie 
                      <ul>
                          <li> Heroes</li>
                          <li style={listStyle}><NumberOfItems price={25}/></li>
                          </ul>
                          </p>
              </span>
              <span style={spanStyle}>
                  <img style={imgStyle} src={masaladosa} /> 
              <p style={pStyle}> Masala Dosa <ul>
                  <li>Cafeteria</li>
                  <li style={listStyle}><NumberOfItems price={35} /></li>
                  </ul>
                  </p>
                  </span>
              <span style={spanStyle}><img style={imgStyle} src={momos} /> 
              <p style={pStyle}> Momos
                   <ul>
                  <li>Amul</li>
                  <li style={listStyle}> <NumberOfItems price={20}/></li>
                  </ul>
                  </p>
              </span>
              <span style={spanStyle}><img style={imgStyle} src={patties} />
              <p style={pStyle}>Patties 
                  <ul>
                <li> Big Treat</li>
                <li style={listStyle}><NumberOfItems price={20} /></li>
                </ul>
                </p> 
                </span>
            </div>
        )
    }
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
export default ItemCard