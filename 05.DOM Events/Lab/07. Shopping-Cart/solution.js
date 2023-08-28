function solve() {
   let products = Array.from(document.querySelectorAll('.product'));
   let addButton = Array.from(document.querySelectorAll('.add-product'));
   let result = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   let cart = [];
   let onclickAddItem = (e) => {
      let product = e.currentTarget.parentNode.parentNode;
      let productDetails = product.querySelector('.product-details');
      let name= productDetails.querySelector('.product-title').textContent;
      let price= product.querySelector('.product-line-price').textContent;
      let order = {name,price};
      cart.push(order);
      result.textContent+= 'Added '+order.name+' for '+order.price+' to the cart.\n'
   }
   addButton.forEach(x=>x.addEventListener('click',onclickAddItem))
   checkoutButton.onclick = ()=>{
      let sum=0;
      let items=[];
      for (const product of cart) {
      sum+=Number(product.price);
      items.push(product.name)
   }
   result.textContent += 'You bought '+items.join(', ')+ ' for ' + (sum).toFixed(2);
   //Remove functionality from buttons after checkout
   addButton.forEach(x=>x.removeEventListener('click',onclickAddItem))
   checkoutButton.onclick='';
}
}