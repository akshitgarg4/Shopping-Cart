import React from 'react';

const Navbar= (props) => {
    return (
        <div style= {styles.nav}>
            <h1 style= {styles.heading}>Shopping Cart</h1>
            <div style= {styles.cartIconContainer}>
                <img src="https://image.flaticon.com/icons/svg/3036/3036969.svg " alt="cart-icon" style={styles.cartIcon}/>
                <span style={styles.cartCount}>{props.count}</span>

            </div>
        </div>
    );
}
const styles={

    heading:{
        margin:'38%',
        align:'center'
    },
    cartIcon:{
        height:40,
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        alignItems:'center'
    },
    cartIconContainer:{
        margin:'1%',
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        top:-9,
        right:-10
    }
}
export default Navbar;
