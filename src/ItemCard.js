import React from 'react'
import {addToCart} from './redux/Shopping/shopping-actions'
import {useState} from 'react'
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
                  <img style={imgStyle} src={props.img} alt="some food item" /> 
                  <div style={pStyle}>Maggie 
                      <ul>
                          <li> {props.name}</li>
                          <li style={listStyle}><NumberOfItems price={25}/></li>
                          </ul>
                          </div>
              </div>
        )
    }

function NumberOfItems(props, {addToCart, currentItem}) {

    const [item, setItem] = useState(0);
    const [total, setTotal] = useState(props.price)

    function handleAddItem(){
        console.log('Got clicked')
        setItem(item+1)
        if(item>0){
            setTotal(total+props.price)
    }
}
    function handleRemoveItem(){
      if(item> 0 ){
        setItem(item-1)
    }
    if(total >props.price){
     setTotal(total-props.price)
      }
    }
    
return (
   <span style={{
       color: 'b',
       borderRadius: '5px'
   }}> {total} Rs <button onClick={()=>handleRemoveItem()} style={{
    border: 'none',
    backgroundColor: 'rgb(255,196,60)',
    paddingTop: '3.5px',
    paddingBottom: '4px',
    marginLeft: '10px',
    borderBottomLeftRadius: '5px',
    borderTopLeftRadius: '5px',
}}>-</button><span style={{color: 'black', marginLeft: '3px'}}>{item} </span> <button onClick={()=>handleAddItem()} style={{
    border: 'none',
    backgroundColor: 'rgb(255,196,60)',
    paddingTop: '3.5px',
    paddingBottom: '4px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
}}>+</button></span>
)
}
const mapStateToProps = state => {
    return {
        currentItem: state.currentItem
    }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            addToCart: (currentItem)=> dispatch(addToCart(currentItem))
        }
    }
export default ItemCard