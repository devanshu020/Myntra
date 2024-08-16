let bagItems = [];
onLoad();


function onLoad(){
let bagItemsstr = localStorage.getItem('bagItems');
bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
Displayitemsonhomepage();
displayBagIcon();
}

function Addtobag(itemID){
  bagItems.push(itemID);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.Bagcount');
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
    } 
    else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}



function Displayitemsonhomepage(){
    let itemsContainerElement = document.querySelector('.items-container');
    let innerHTML = '';
   items.forEach(item => {
       innerHTML += `
       <div class="item-container">
       <img class="image-item" src="${item.image_item}" alt="tshirt">
       <div class="rating">
           ${item.rating.stars} ⭐️ | ${item.rating.noOfReviews}
       </div>
       <div class="brand" >${item.brand}</div>
       <div class="itemname">${item.itemname}</div>
       <div class="price">
           <span class="currentprice">${item.currentprice}</span>
           <span class="originalprice">${item.originalprice}</span>
           <span class="discount">${item.discount}</span>
       </div>
       <button class="add-to-bag" onclick="Addtobag(${item.id});"><i class="fa-solid fa-bag-shopping"></i> ADD TO BAG</button> 
       </div>`
   });
   
   
   
   itemsContainerElement.innerHTML = innerHTML;

   
}
