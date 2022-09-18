let carts = document.querySelectorAll('#forAddToCart');


let product = [

    {
        name : 'Dabur NaturalCare',
        tag: 'ayush_dabur_naturecare_double_action_powder_100_gm_0',
        price:186,
        incart:0
    },
    {
        name : 'Pudin Hara',
        tag: 'ayush_dabur_pudin_hara_pearls_capsule_10_s_0',
        price:90,
        incart:0
    },
    {
        name : 'Dr Reckeweg',
        tag: 'ayush_dr_reckeweg_r65_psoriasin_22_ml_0',
        
        price:116,
        incart:0
    },
    {
        name : 'Dr Reckeweg R9',
        tag: 'ayush_dr_reckeweg_r9_jutussin_drops_22_ml_0',
       
        price:100,
        incart:0
    },
    {
        name : 'Aqua Plus Cream',
        tag: 'ayush_hapdco_aqui_plus_cream_25_gm_0',
        price:120,
        incart:0
    },
    {
        name : 'Liv 52 Tablets',
        tag: 'ayush_liv_52_tablet_100_s_0',
        price:56,
        incart:0
    },
    {
        name : 'Breathe Granukes 400 GM',
        tag: 'ayush_pankajakasthuri_breathe_easy_granules_400_gm_0',
        price:190,
        incart:0
    },
    {
        name : 'SBL Scalptone',
        tag: 'ayush_sbl_scalptone_tablet_25_gm_0',
        price:35,
        incart:0
    }
]

for(let i =0; i< carts.length;i++)
{
    carts[i].addEventListener('click' , () => {
        cardNumbers(product[i])
        totalCost(product[i])
    })
}

function onLoadCartNumbers() {
    let = productNumber = localStorage.getItem('cardNumbers');

    if(productNumber){
        document.querySelector('.cart span').textContent = productNumber;
    }
}

function  cardNumbers(product) {
    // console.log("this product clicked is" , products);
    let = productNumber = localStorage.getItem('cardNumbers');
    

    productNumber = parseInt(productNumber);
    if(productNumber){
        localStorage.setItem('cardNumbers' , productNumber +1);
        document.querySelector('.cart span').textContent = productNumber+ 1;
    }
    else {
        localStorage.setItem('cardNumbers' , 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product)
    

}
function setItems(product)
{
    // console.log("Inside of setItems function ");
    // console.log("My product is",product);

    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);
    // console.log("my cart items are " , cartItems);


    if(cartItems != null)
    {
        // cartItems['']
        if(cartItems[product.tag] == undefined)
        {
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
            cartItems[product.tag].incart += 1; 
    }
    else{

        product.incart = 1;
        cartItems = {
            [product.tag]:product
        }


    }
   
   
    localStorage.setItem("productsInCart" , JSON.stringify(cartItems) )
}


function totalCost(product){
    // console.log("the product price is " , product.price);

    let  cartCost = localStorage.getItem('totalCost')
    
    // console.log("My cart cost is " , cartCost);
    // console.log(typeof cartCost);

    if(cartCost != null)
    {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost" , cartCost + product.price);

    }
    else{
        localStorage.setItem("totalCost" , product.price);
    }
}

function displayCart(){
    let  cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);

    let productContainer = document.querySelector(".products .product-header");
    let  cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer)
    {
        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product-title">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="../Asset/Ayush/${item.tag}.jpg"> 
                <span>${item.name}</span>
            </div> 
            <div class="price">${item.price}</div>
            <div class="quantity">
                
                <span>${item.incart}</span>
                
            </div>
            <div class="total">
            ${item.incart * item.price},00
            </div>\n


            ` 
            "\n"
        })
        productContainer.innerHTML += `
            <div class=basketTotalContainer">
                <h4 class="bascketTotalTitle">
                    Basket total
                </h4>
                <h4 class="bascketTotal">
                    ${cartCost}.00
                </h4>
            </div>
        
        `
    }

}
onLoadCartNumbers();
displayCart();