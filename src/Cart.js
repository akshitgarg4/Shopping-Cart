import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    /* state defined for this component*/ 
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    price:9999,
                    title:'Phone',
                    img:'',
                    qty:10,
                    id:1
                },
                {
                    price:99999,
                    title:'Laptop',
                    img:'',
                    qty:4,
                    id:2
                },
                {
                    price:999,
                    title:'Watch',
                    img:'',
                    qty:2,
                    id:3
                }

            ]

            
        }
    }
    increaseQuantity=(product) =>
    {
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    decreaseQuantity=(product) =>
    {
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty > 0)
        {
            products[index].qty-=1;
            this.setState({
                products:products
            })
        }
        else{
            return;
        }
        
    }
    render(){
        const {products} =this.state;
        return(

        <div className="cart">
            {
                products.map((product) => {
                    return (
                        <CartItem product={product} key={product.id} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity}/>
                    );
                })
            }
        </div>
        )
    }
}
export default Cart;