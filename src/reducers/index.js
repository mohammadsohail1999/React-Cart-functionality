
import {combineReducers} from 'redux';

const CartReducer = (state=[],action)=>{


    switch(action.type){

      case 'CART_ADD':
      const item = action.payload;
      const existingItem = state.find(x=>x.id===item.id);
        if(existingItem){   
      return state.map(el => el.id === existingItem.id ? item : el)
    }else{
       return [...state,item]
    }
    
    case 'REMOVE_ITEM':

    return state.filter(el => el.id !== action.payload)

    
    default:
           return state 



    }







}






export default combineReducers({
    cartItems: CartReducer 
})