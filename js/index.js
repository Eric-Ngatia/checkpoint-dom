let btnPlus = document.querySelector(".qty_plus");

let btnMinus = document.querySelector(".qty_minus");

let btnAdd = document.querySelector("#add_button");



btnPlus.addEventListener("click", increaseQuantity);

function increaseQuantity(){
    document.querySelector(".qty").value = parseInt (document.querySelector(".qty").value) + 1;


    let subTotal = document.querySelector(".subtotal");
    let price = document.querySelector(".price");
    let quantity = document.querySelector(".qty");

    subTotal.innerText = parseInt(quantity.value)*parseInt(price.innerText);
}


btnMinus.addEventListener("click", decreaseQuantity);

function decreaseQuantity(){
    document.querySelector(".qty").value = Math.abs(parseInt (document.querySelector(".qty").value) -1);
    

    let subTotal = document.querySelector(".subtotal");
    let price = document.querySelector(".price");
    let quantity = document.querySelector(".qty");

    subTotal.innerText = parseInt(quantity.value)*parseInt(price.innerText);


}

btnAdd.addEventListener("click", addArticle);

function addArticle(){
    let name = document.querySelector("#name_product");
    let price = document.querySelector("#price_product");

    let all_products = document.querySelector("#all_products");
    all_products.innerHTML = all_products.innerHTML + '<tr><td ><div class="article_name"><img width="50px" height="50px" src="res/image/stylo.jpg" alt="stylo"><div><h3>'+name.value+'</h3><a href="">supprimer</a></div></div></td><td><div class="quantity"><button class="qty_minus">-</button><input type="text" readonly placeholder="Unit price" class="qty" value="1"><button class="qty_plus">+</button></div></td><td class="price">'+price.value+' fr</td> <td class="subtotal"><span>'+price.value+' fr</span></td></tr>';

    let btnPlusAll = document.querySelectorAll(".qty_plus");
    btnPlusAll.forEach(btn => addEventListener("click", increaseQuantity));
    btnPlus.addEventListener("click", increaseQuantity);

    let btnMinus = document.querySelectorAll(".qty_minus");
    btnMinusAll.forEach(btn => addEventListener("click", decreaseQuantity));
    btnMinus.addEventListener("click", decreaseQuantity);



}