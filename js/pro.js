let animation_img = document.querySelector(".animation_img");
let myShopping_pro = document.querySelector(".myShopping_pro");

function drawAddedCart(allpro = []) {
    if(JSON.parse(localStorage.getItem("pro")).length === 0)
        animation_img.innerHTML = `
            <img class="tex-center" src="images/anima.gif" alt="animation_img">
        `
    

    let womanPro = JSON.parse(localStorage.getItem("pro")) || allpro;
    womanPro.map((womanProItem) => {
        myShopping_pro.innerHTML += `
        <div class="myShopping_pro_item row mt-3 d-flex align-items-center justify-content-between">
        <div class="img col-md-2 col-3 ">
                <img class="m-0" src="${womanProItem.imageUrl}" alt="image" style="height: 90px">
            </div>

            <div class="title col-md-4 col-2">
                <p>${womanProItem.title}</p>
                <input type="number" min="1" value="1">
            </div>

            <div id="price" class="col-md-4 col-2">${womanProItem.price}</div>

            <div class="col-md-2 col-4">
                <button id="remove" onclick="removeFromCart(${womanProItem.id})">Remove</button>
            </div>
        </div>
        `
    });
}
drawAddedCart();


function removeFromCart(id) {
    myShopping_pro.innerHTML = "";

    if (localStorage.getItem("pro")) {
        let objgetPro = JSON.parse(localStorage.getItem("pro"));
        let filteredItems = objgetPro.filter((remove) => remove.id !== id);
        localStorage.setItem(("pro"), JSON.stringify(filteredItems));
        drawAddedCart(filteredItems);
        location.reload();
    }

}