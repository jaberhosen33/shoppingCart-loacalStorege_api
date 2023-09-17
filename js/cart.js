// addItem button to get input data and set  
const Getproduct=()=>{
 const product=document.getElementById('product').value;
 const quantity=document.getElementById('quantity').value;

displayproduct(product,quantity);

}
// display input field data on ul-li
const displayproduct=(product,quantity)=>{
 const container=document.getElementById('container');
 const ul=document.createElement('ul');
 ul.innerHTML=`<li>${product}: ${quantity}</li> `;
 container.appendChild(ul);

}
// set data in localStorage
const storedCart=()=>{
//  init empty object
  let cart={};
//   get cart object on localStorage
 const StoreCartData=localStorage.getItem('cart');
//  check data is empty or set data Jeson formet
 if(StoreCartData){
    cart=JSON.parse(StoreCartData);
 }
 return cart;
}
storedCart();





















