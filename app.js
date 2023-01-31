
//variables iniciales
let shoppingCartArray = [];
let total = 0;

productoContainer = document.querySelector('.shop-items');
//elegir boton anadir al cart




const fechtProducto = async () => {

    const response = await fetch('https://api.escuelajs.co/api/v1/products/');
    const data = await response.json();

    console.log(data);
    let productoArray = data.slice(1, 25);


    //imprimir productos en pantalla
    productoArray.forEach(product => {
        productoContainer.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
            <div class="card shadow" style="width: 18rem;">
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
    console.log(addBtnProduct);

}

fechtProducto();

