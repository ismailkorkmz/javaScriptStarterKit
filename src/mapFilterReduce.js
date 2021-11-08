let cart = [
    {id:1, ProductName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, ProductName:"Bardak", quantity:2, unitPrice:30},
    {id:3, ProductName:"Kalem", quantity:1, unitPrice:20},
    {id:4, ProductName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, ProductName:"Kitap", quantity:3, unitPrice:30},
    {id:6, ProductName:"Pot", quantity:5, unitPrice:150},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.ProductName + " : " + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")


let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0) //ürünün toplam fiyatı
console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2) //filtreleme
console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7,ProductName:"Ruhsat",quantity:1,unitPrice:20})
}

addToCart(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number +=1
    
}
sayiTopla(sayi)
console.log(sayi)