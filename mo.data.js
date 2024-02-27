
const cart = [
  {
    id:1,
    product:{},
    ammount:2,
    price:100
  },
  {
    id:2,
    product:{},
    ammount:2,
    price:100
  },
  {
    id:3,
    product:{},
    ammount:2,
    price:100
  },
  {
    id:4,
    product:{},
    ammount:2,
    price:100
  },
]

function addProduct(product){
  cart = [...cart, {product,id:cart.length+1}];
}

function removeProduct(id){
  dataFiltered = cart.filter((item)=>item.id !== id)
  cart=dataFiltered
}
