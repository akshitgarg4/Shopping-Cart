import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebaes from 'firebase';



class App extends React.Component {

   /* state defined for this component*/ 
   constructor()
   {
       super();
       this.state={
           products:[
               {
                   price:9999,
                   title:'Phone',
                   img:'https://cdn.mos.cms.futurecdn.net/99B93aZbmkyWD6x52TXStd.jpg',
                   qty:10,
                   id:1
               },
               {
                   price:99999,
                   title:'Laptop',
                   img:'https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg',
                   qty:4,
                   id:2
               },
               {
                   price:999,
                   title:'Watch',
                   img:'https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._SX466_.jpg',
                   qty:2,
                   id:3
               }

           ]

           
       }
   }
   /*

   //to read from firestore
   componentDidMount()
   {
       firebase.firestore().collection('products').get().then((snapshot)=>{
           snapshot.docs.map((doc)=>{
               console.log(doc.data());
           })
           const products=snapshot.docs.map((doc)=>{
               const data =doc.data();
               //we have to give unique id to each product and in db we haven't provided a unique id instead 
               //a unique id is automaticaaly provided to each document in db so we give the id of document
               //to the product it contains and then use it
               data['id']=doc.id;
               return data;
           })
           this.setState({
               products:products
           });
       });
   }
   */
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
   deleteQuantity=(id)=>
   {
       const {products}=this.state;
       const items = products.filter( (item) => item.id !== id )
       this.setState({
           products:items
       })
   }
   getCount = ()=>{
     let count=0;
     const {products} =this.state;
     products.forEach((product)=>{
       count+=product.qty;
     })
     return count;
   }
   getTotal = ()=>{
    let count=0;
    const {products} =this.state;
    products.forEach((product)=>{
      count+=(product.qty*product.price);
    })
    return count;
  }
  render(){
    return (
      <div className="App">
        <Navbar count={this.getCount()}/>
        <Cart products={this.state.products} deleteQuantity={this.deleteQuantity} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity}/>
    <div style={{fontSize:20,padding:20}}>Total : {this.getTotal()}</div>
      </div>
    );
  }
  }
  

export default App;
