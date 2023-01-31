
//variables iniciales
let shoppingCartArray = [];
let total = 0;

productoContainer = document.querySelector('.shop-items');
//elegir boton anadir al cart
//seleccionar car items para agrehgar producto seleccioado
let cardContainer = document.querySelector('.cart-items');




const fechtProducto = async () => {

    const response = await fetch('https://api.escuelajs.co/api/v1/products/');
    const data = await response.json();

    console.log(data);
    let productoArray = data.slice(1, 25);


    //imprimir productos en pantalla
    productoArray.forEach(product => {
        productoContainer.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
            <div class="card shadow" style="width: 18rem;" id="${product.id}">
                <img src="${product.images[0]} " class="card-img-top" alt="producto">
                <div class="card-body p-4">
                    <h5 class="card-title">${product.title}</h5>
                    <div class="d-flex justify-content-between">
                        <a href="#" class="btn btn-primary shop-item-button">ADD TO CARD</a>
                        <span class="shop-item-price">$ ${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    let addBtnProduct = document.querySelectorAll('.shop-item-button');

    //para comvertirlo a un array transformar nodelist a array
    addBtnProduct = [...addBtnProduct];
    console.log(addBtnProduct);

    //funcion cuando se hace click a un boton add
    addBtnProduct.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            //console.log('click');
            //agrgar productos al carro



            //buscar el id del producto
            console.log(e);



            //con el id obtner el objecto actual


            //agregar el producto al carro



            cardContainer.innerHTML += `
           
            <div class="cart-items row d-flex align-items-center">
                <div class="col-4 d-flex align-items-center">
                    <img src="./images/img2.jpg" alt="producto" class="img-fluid w-25">
                    <span class="card-item-title">shirt</span>
                </div> 

                <div class="col-4">
                    <span class="car-price cart-column">$ 199990</span>
                </div>

                <div class="col-4">
                    <input type="number" class="card-cuantity-input" min="1">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>
            </div>
      
            
            `;

        })
    });



}

fechtProducto();

