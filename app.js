
let shoppingCartArray = [];
let total = 0;

productoContainer = document.querySelector('.shop-items')



const fechtProducto = async () => {

    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();

    console.log(data);
    let productoArray = data;


    productoArray.forEach(product => {

        productoContainer.innerHTML += `
        <div class="col-md-4 ">
                <div class="card" style="width: 18rem;">
                    <img src="${product.images[0]} " class="card-img-top" alt="producto">
                    <div class="card-body p-4">
                        <h5 class="card-title">${product.title}</h5>
                        <div class="d-flex justify-content-between">
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            <span class="shop-item-price">${product.price}</span>
                        </div>
                    </div>
                </div>
        `;

    });

}


fechtProducto();