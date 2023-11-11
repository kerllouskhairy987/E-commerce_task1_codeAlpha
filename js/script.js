// MEDIA HEADER(NAVBAR)
let links = document.querySelector(".links");
let icon_list = document.querySelector(".icon_list");

function toggleClass(){
    links.classList.toggle("active");
    setTimeout(()=>{
        icon_list.classList.toggle("bx-x");
    }, 1000)
}
function removeClass(){
    links.classList.remove("active");
    setTimeout(()=>{
        icon_list.classList.remove("bx-x");
    }, 1000)
}
//
// draw Woman Products
//
let womanPlace = document.querySelector(".product_item"); 

function drawWoman(){
    womanPlace.innerHTML = "";
    woman.map((womanPro) =>{
        womanPlace.innerHTML += `
        <div class="item">
            <img src="${womanPro.imageUrl}" alt="product">
            
            <p>${womanPro.title}</p>
            <p>${womanPro.price} <span>$</span></p>
            
            <button class="w-100 p-1" onclick="addWoman(${womanPro.id})">Add to cart</button>
            </div>
        `
    })
}
drawWoman();

let counter = document.querySelector(".counter");

let addedItem = localStorage.getItem("pro") ? JSON.parse(localStorage.getItem("pro")) : [];
if(addedItem) {
    counter.innerHTML = addedItem.length;
}

function addWoman(id) {
    let choosenItem = woman.find((choosen) => choosen.id === id);

    addedItem = [... addedItem , choosenItem];
    localStorage.setItem(("pro") , JSON.stringify(addedItem));

    counter.innerHTML = addedItem.length;
}































// -------------------------------------------
// DRAW (MAN) PRODUCT 
// -------------------------------------------
function drawMan(){
    womanPlace.innerHTML = "";
    man.map((womanPro) =>{
        womanPlace.innerHTML += `
        <div class="item">
            <img src="${womanPro.imageUrl}" alt="product">

            <p>${womanPro.title}</p>
            <p>${womanPro.price}</p>

            <button class="w-100 p-1">Add to cart</button>
            </div>
        `
    })
}

function drawKids(){
    womanPlace.innerHTML = "";
    kids.map((womanPro) =>{
        womanPlace.innerHTML += `
        <div class="item">
            <img src="${womanPro.imageUrl}" alt="product">

            <p>${womanPro.title}</p>
            <p>${womanPro.price}</p>

            <button class="w-100 p-1">Add to cart</button>
            </div>
        `
    })
}

function drawAccessories(){
    womanPlace.innerHTML = "";
    accessories.map((womanPro) =>{
        womanPlace.innerHTML += `
        <div class="item">
            <img src="${womanPro.imageUrl}" alt="product">

            <p>${womanPro.title}</p>
            <p>${womanPro.price}</p>

            <button class="w-100 p-1">Add to cart</button>
            </div>
        `
    })
}
