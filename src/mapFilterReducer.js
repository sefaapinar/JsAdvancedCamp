let cart = [
    {id:1,productName:"Telefon", quantity:7, unitPrice:4000},
    {id:2,productName:"Şarj Cihazı", quantity:4, unitPrice:400},
    {id:3,productName:"Kahve Potu", quantity:4, unitPrice:3000},
    {id:4,productName:"Kitap", quantity:2, unitPrice:1000},
    {id:5,productName:"Kalem", quantity:1, unitPrice:2000},

]

console.log("<ul>")
cart.map(product =>{
console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")


let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

console.log(total)





let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

 









function addToCart(sepet) {
    sepet.push({id:6,productName:"Poşet", quantity:6, unitPrice:2000})
}

addToCart(cart)

console.log(cart)



let sayi = 10
function SayiTopla(number) {
    number +=1
}

SayiTopla(sayi)
console.log(sayi)

