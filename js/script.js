
// slider
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("d-block w-100");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}
// slider*******************************************



let quantity = document.getElementsByClassName("input")
// plus
let plus = document.querySelectorAll(".plus")
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    quantity[i].innerHTML++
    calcul(i)
  })
}

// plus ********************************************

// minus
let minus = document.getElementsByClassName("minus")
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', function () {
    quantity[i].innerHTML
    if (quantity[i].innerHTML > 0) {
      quantity[i].innerHTML--
      calcul(i)
    }

  })
}

// minus ********************************************
// calcul sommme
let price = document.querySelectorAll(".text-hover")
let mult = document.querySelectorAll(".finalPrice")

function calcul(i) {
  let result
  result = price[i].innerHTML * quantity[i].innerHTML
  mult[i].value = result

}





// affichage pay
let order = document.getElementsByClassName("order__blog")
let quantite = document.getElementsByClassName("quantite")
let total = document.getElementsByClassName("total")
let prixun = document.getElementsByClassName("prix-un")
let sumtotal = document.getElementsByClassName("sum-total")
function ooopen() {
  order[0].style.visibility = "visible";
  for (let i = 0; i < quantite.length; i++) {
    quantite[i].value = quantity[i].innerHTML
    prixun[i].value = price[i].innerHTML


    let Q = (parseInt(quantite[0].value) + parseInt(quantite[1].value) + parseInt(quantite[2].value))
    // console.log(Q);
    total[0].value = Q
    let PRIX = (parseInt(mult[0].value) + parseInt(mult[1].value) + parseInt(mult[2].value))



    sumtotal[0].value = PRIX
  }


}
// closed pay

function X() {

  order[0].style.visibility = "hidden";
  console.log(order);


}


// fa-heart color
let like = document.getElementsByClassName("like")


for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click', function () {

    let color = document.getElementsByClassName('fa-heart')[i].style.color
    if (color == "white") {
      document.getElementsByClassName('fa-heart')[i].style.color = "red";
    }
    else {
      document.getElementsByClassName('fa-heart')[i].style.color = "white";

    }
  })

}

// fa-heart color***********************************
let msg = document.getElementsByClassName('msg')[0].value
// form validation 
let submit = document.getElementsByClassName("button-contact")
for (let i = 0; i < submit.length; i++) {
  submit[i].addEventListener('click', function () {
    let name = document.getElementsByClassName('name')[i].value
    let email = document.getElementsByClassName('email')[i].value
    let message = document.getElementsByClassName('message')[i].value
    
    

   if (name == "" && email == "" && message == ""){
      document.getElementsByClassName('name')[i].style.border = "2px solid red"
      document.getElementsByClassName('email')[i].style.border = "2px solid red"
      document.getElementsByClassName('message')[i].style.border = "2px solid red"
      document.getElementsByClassName('msg')[0].style.visibility = "visible"
      document.getElementsByClassName('msg')[0].value= "Please Enter name , email , message"
    
   } else{

     if (name == "") {
      document.getElementsByClassName('name')[i].style.border = "2px solid red"
      document.getElementsByClassName('msg')[0].style.visibility = "visible"
      document.getElementsByClassName('msg')[0].value = "Please Enter name"
       
     

    }
    else {
      document.getElementsByClassName('name')[i].style.border = "2px solid black"
      document.getElementsByClassName('msg')[0].style.visibility = "hidden"
      
      
    }

   
    if (message == "") {
      document.getElementsByClassName('message')[i].style.border = "2px solid red"
      document.getElementsByClassName('msg')[0].style.visibility = "visible"
      document.getElementsByClassName('msg')[0].value = "Please Enter message"
    }
    else {
      document.getElementsByClassName('message')[i].style.border = "2px solid black"
      document.getElementsByClassName('msg')[0].style.visibility = "hidden"
    }

    if (email == "") {
      document.getElementsByClassName('email')[i].style.border = "2px solid red"
      document.getElementsByClassName('msg')[0].style.visibility = "visible"
      document.getElementsByClassName('msg')[0].value = "Please Enter email"
      
    }
    else {
      document.getElementsByClassName('email')[i].style.border = "2px solid black"
      document.getElementsByClassName('msg')[0].style.visibility = "hidden"
    }
  }
  })}




// form validation**********************************



// message successfully 
let payinfo = document.getElementsByClassName("pay-info")

function pay() {
  X()
  payinfo[0].style.visibility = "visible"
  setTimeout(() => {
    payinfo[0].style.visibility = "hidden"
  }, "2000")


}


// panier




 const cartButtons = document.querySelectorAll(".button");
const productCarts = document.querySelectorAll('.card')
const shoppingCart = document.querySelectorAll('.shopping-cart')
let plusPanier = document.getElementsByClassName('ppanier')

let shopping = document.getElementsByClassName("shopping-cart")

function panier() {
  if (shopping[0].style.visibility == "visible") {
    setTimeout(() => {
      shopping[0].style.visibility = "hidden"
    }, "2000")
    // shopping[0].style.visibility = "hidden"
      
   
  }
  else shopping[0].style.visibility = "visible"
}


cartButtons.forEach((button,i) =>{
    button.addEventListener("click",()=> cartClick(button,i));
});

function cartClick(button,i) {
    if(!button.classList.contains("clicked")){
    button.classList.add("clicked");
    plusPanier[0].innerHTML ++

    // create image
    const image=document.createElement("img")
    image.src=productCarts[i].getElementsByTagName("img")[0].src
   
    

    // create title
    const title=document.createElement('h2') 
    title.innerText=productCarts[i].querySelector('h2').innerText
    
    

    // // create unit price
    const unitPrice=document.createElement('h4')
    unitPrice.innerText=productCarts[i].querySelector("h4").innerText
    

    //     //  create quantity input
    const quantity=document.createElement('input')
    quantity.type="number"
    quantity.value=1
    quantity.min=1


    
    // // total product
    const totalProduct=document.createElement('h4')
    totalProduct.innerText=productCarts[i].getElementsByTagName("h4").innerText
    
    totalProduct.innerHTML=unitPrice.innerHTML


    quantity.addEventListener('change',(e)=>{
        const val=e.target.value
        totalProduct.innerText=" $"+parseFloat(parseInt(unitPrice.innerText.substring(1))*val).toFixed(2)
        console.log(parseInt(unitPrice.innerText.substring(1))*val)
    })


    // create remove button
    const removeBtn=document.createElement('button')
    removeBtn.innerText="X"
    removeBtn.classList.add("button")
    removeBtn.addEventListener('click',()=>removeBtn.parentElement.remove( plusPanier[0].innerHTML --)
    
    )


    // // create DIV

    const cart=document.createElement("div")
    cart.classList.add("item")
    cart.append(image,title,unitPrice,quantity,totalProduct,removeBtn)
    // const sC=document.getElementsByClassName('s-c')[0].classList.remove("hide-me-please")
    // document.getElementsByTagName('h2')[0].classList.add('hide-me-please')
    shoppingCart[0].appendChild(cart)
  }
 
 
  panier( setTimeout(() => {
    shopping[0].style.visibility = "hidden";
    
  }, "5000"))
  
}




// ==========================================================================

// const panier=document.getElementsByClassName('shopping-container')[0]

// panier.addEventListener('click',()=>{
//     document.getElementsByClassName('shopping-cart')[0].classList.toggle('hide-me-please')
// })




























/*      
  <div class="shopping-cart">
    

    <div class="item">

      <img src="img/product1.jpg" width="150px" height="150px" />

      <h2>Rice</h2>

      <h4>$12.00</h4>

      <input type="number" value="1">

      <h4>$5490021</h4>


      <button class="button">X</button>


    </div>


  </div>
*/
