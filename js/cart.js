// addItem button to get input data and set  
const Getproduct=()=>{
 const productfield=document.getElementById('product');
 const quantityfield=document.getElementById('quantity');
 const product=productfield.value;     
 const quantity=quantityfield.value;
 productfield.value="";
 quantityfield.value="";
displayproduct(product,quantity);
setDataOnLocalstorege(product,quantity);
}
// display input field data on ul-li
const displayproduct=(product,quantity)=>{
 const container=document.getElementById('container');
 const ul=document.createElement('ul');
 ul.innerHTML=`<li>${product}: ${quantity}</li> `;
 container.appendChild(ul);

}
// get data in localStorage
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

// set Data On Localstorege
const setDataOnLocalstorege=(product,quantity)=>{
//  get data on storedcart function
    const getcartdata=storedCart();
    getcartdata[product]=quantity;
    const convertStringdata=JSON.stringify(getcartdata);
    // set data on localStorage
    localStorage.setItem('cart',convertStringdata)
}
// show data on diplay from loacal storage
const displayDataFromStorage=()=>{
  //  get data on storedcart function  
    const productinfo=storedCart();
    for(product in productinfo){
        const quantity=productinfo[product];
        displayproduct(product,quantity)
    }
}
displayDataFromStorage()
















