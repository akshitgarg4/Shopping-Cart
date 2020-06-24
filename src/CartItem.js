import React from 'react';
class CartItem extends React.Component{

    /* state defined for this component*/ 
    constructor()
    {
        super();
        this.state={
            price:999,
            title:'phone',
            img:'',
            qty:1
        }
    }
    render(){
         /* Object destructuring */
        const {title,qty,price}=this.state;


        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>

                    <div className="cart-item-actions">
                        {/*place buttons here*/}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg"/>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg"/>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>

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