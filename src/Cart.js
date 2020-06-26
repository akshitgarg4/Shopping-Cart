import React from 'react';
import CartItem from './CartItem';

const Cart = (props)=> {
   
        const {products} = props;
        return(

        <div className="cart" style={{marginLeft:'35%'}}>
            {
                products.map((product) => {
                    return (
                        <CartItem product={product} key={product.id} deleteQuantity={props.deleteQuantity} increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity}/>
                    );
                })
            }
        </div>
        )
    
}
export default Cart;