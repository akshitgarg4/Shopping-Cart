import React from 'react';
class CartItem extends React.Component{
    render(){
         /* Object destructuring */
        const {title,qty,price}=this.props.product;
        const {deleteQuantity , product ,decreaseQuantity} =this.props;

        console.log(this.props);



        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} alt="img"/>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>

                    <div className="cart-item-actions">
                        {/*place buttons here*/}
                        <img alt="decrease" className="action-icons" onClick={()=>this.props.increaseQuantity(this.props.product)} src="https://image.flaticon.com/icons/svg/992/992651.svg"/>
                        <img alt="increase" className="action-icons" onClick={()=>decreaseQuantity(product)} src="https://image.flaticon.com/icons/svg/659/659892.svg"/>
                        <img alt="delete" className="action-icons" onClick={()=>deleteQuantity(product.id)} src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>

                    </div>

                </div>
            </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}
export default CartItem;