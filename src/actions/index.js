

export const addCart = (data)=>(dispatch,getState)=>{


          dispatch({type:'CART_ADD',payload:data});


          localStorage.setItem('cartItems',JSON.stringify(getState().cartItems));
         


}        
      

export const removeFromCart = (id)=>(dispatch,getState)=>{


    

    dispatch({type:'REMOVE_ITEM',payload:id})


    localStorage.setItem('cartItems',JSON.stringify(getState().cartItems));



}













