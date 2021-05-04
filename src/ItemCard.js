import React from 'react'

function ItemCard(props){

        const imgStyle = 
            {
                width: '100%',
                height: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftwRadius: '10px'
              }
        const spanStyle = {
            width: '200px',
           backgroundColor: 'rbg(255, 255,255)',
           fontFamily: 'Lato',
           borderRadius: '10px',
           boxShadow: '6px 12px 12px 1px #c1c1c1',
           padding: '0px'
        }
        const pStyle = {
            marginLeft: '2%'
        }
        const listStyle = {
            color: '#54e346'
        }
        return (
          
              <div className="col-md-3" style={spanStyle} >
                  <img style={imgStyle} src={props.img} /> 
                  <p style={pStyle}>Maggie 
                      <ul>
                          <li> {props.name}</li>
                          <li style={listStyle}><NumberOfItems price={25}/></li>
                          </ul>
                          </p>
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
export default ItemCard
