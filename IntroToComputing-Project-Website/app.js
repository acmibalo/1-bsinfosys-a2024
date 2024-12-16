let openShopping = document.querySelector ('.shopping');
let closeShopping = document.querySelector ('.closeShopping');
let list = document.querySelector ('.list');
let listCart = document.querySelector ('.listCart');
let body = document.querySelector ('body');
let total = document.querySelector ('.total');
let quantity = document.querySelector ('.quatity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'M11 COZY',
        image: '1.PNG',
        price: 199
    },
    {
        id: 2,
        name: 'M12 COLD',
        image: '2.PNG',
        price: 199
    },
    {
        id: 3,
        name: 'M13 SUNSET',
        image: '3.PNG',
        price: 199
    },
    {
        id: 4,
        name: 'M14 MISS',
        image: '4.PNG',
        price: 199
    },
    {
        id: 5,
        name: 'M15 CHERISH',
        image: '5.PNG',
        price: 199
    },
    {
        id: 6,
        name: 'M16 WILD',
        image: '6.PNG',
        price: 199
    },
    {
        id: 7,
        name: 'M17 REVOLT',
        image: '7.PNG',
        price: 199
    },
    {
        id: 8,
        name: 'M18 DISGUST',
        image: '8.PNG',
        price: 199
    },   
];
let listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addtoCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addtoCart(key){
    if(listCarts[key]==null){
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML ='';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=> {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value !=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
          `;
          listCart.appendChild(newDiv);
        }
    })
    total.innerText =  totalPrice.toLocaleString();
    quantity.innerText =count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }
    else {
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}
