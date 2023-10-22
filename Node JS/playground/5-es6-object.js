// Object property shorthand
const name = "Parvej"
const userAge = 25

const user = {
  name,
  age: userAge,
  location: 'Noida'
}

console.log(user)


// Object destrcutring
const product = {
  label: 'Red node book',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating=5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)



const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)


// const name = "Parvej"
// const userAge = 25

// const user = {
//   name: name,
//   age: userAge,
//   location: 'Noida'
// }

// console.log(user)