const Getproduct=()=>{
 const product=document.getElementById('product').value;
 const quantity=document.getElementById('quantity').value;

displayproduct(product,quantity);
}
const displayproduct=(product,quantity)=>{
 const container=document.getElementById('container');
 const ul=document.createElement('ul');
 ul.innerHTML=`<li>${product}: ${quantity}</li> `;
 container.appendChild(ul);

}