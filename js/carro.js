

let carroCompras = JSON.parse(localStorage.getItem("carro-compras"));


//CAPTURA DE ELEMENTOS
let leyenda = document.getElementById("leyenda");
let carroProductos = document.getElementById("carro-productos");
let carroFinal = document.getElementById("carro-final");
let carroComprado = document.getElementById("carro-comprado");
let botonVaciar = document.getElementById("boton-vaciar");
let botonComprar = document.getElementById("boton-comprar");
let botonEliminar = document.querySelectorAll (".boton-eliminar");
let totalCarro = document.querySelector(".carro-total-compra");
let mensajeCompra = document.querySelector(".mensaje-compra");


//RENDER DE PRODUCTOS EN CARRO COMPRAS
function productosEnCarrito(){
    if(carroCompras){
    
        carroProductos.innerHTML = "";

        carroCompras.forEach((producto) => {
    
            let contenedorCarrito = document.createElement("div");
            contenedorCarrito.classList.add("carro-producto")
            contenedorCarrito.innerHTML = `
                <img class="img-carrito" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="prod-titulo">
                    <p>Producto</p>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="prod-cantidad">
                    <p>Cantidad</p>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="prod-precio">
                    <p>Precio</p>
                    <p>$${producto.precio * 1.19}</p>
                </div>
                <div class="prod-subtotal">
                    <p>Subtotal</p>
                    <p>$${(producto.precio * producto.cantidad) * 1.19}</p>
                </div>
                <button class="boton-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
            `;
    
            carroProductos.append(contenedorCarrito);
            
        });
        
    }
 
    generarBotonEliminar();
    calcularTotalCompra();
}


productosEnCarrito()

//AGREGAR BOTONES ELIMINAR
function generarBotonEliminar() {
    botonEliminar = document.querySelectorAll(".boton-eliminar");
  

    botonEliminar.forEach (boton => {
        boton.addEventListener("click", eliminarProducto);
       
    })
}


//ELIMINACION DEL PRODUCTO EN EL NAVEGADOR Y LOCAL STORAGE
function eliminarProducto(e) {

    Toastify({
        text: "Producto eliminado",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #835579, #DA87E6)",
          borderRadius: "1.5rem"
        },
        offset: {
            x: '2em', 
            y: '3em' 
          },
        onClick: function(){} 
      }).showToast();

    let idBtnEliminar = e.currentTarget.id;
    let index = carroCompras.findIndex(producto =>  producto.id === idBtnEliminar);

    carroCompras.splice(index, 1);
    productosEnCarrito();

    localStorage.setItem("carro-compras", JSON.stringify (carroCompras));

}



//FUNCIONALIDAD BOTON VACIAR
botonVaciar.addEventListener("click", vaciarCarro)

function vaciarCarro(){

    Swal.fire({
        title: 'Estás seguro?',
        text: "Se eliminarán todos tus productos!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#74085C',
        cancelButtonColor: '#8A2BE2',
        confirmButtonText: 'Si, estoy seguro!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            carroCompras.length = 0;
            localStorage.setItem("carro-compras", JSON.stringify (carroCompras));
            productosEnCarrito();

            Swal.fire(
                'Productos eliminados!',
                'Tu carrito esta vacío <i class="bi bi-emoji-frown"></i>',
                'success'
          )
        }
      })

   

}

//FUNCION CALCULO TOTAL DE LA COMPRA
function calcularTotalCompra() {
    let calculoTotal = carroCompras.reduce ((acc, producto) => acc + (producto.precio * producto.cantidad) * 1.19, 0);
    totalCarro.innerText = `$${calculoTotal}`;
}



//FUNCIONALIDAD BOTON COMPRAR
botonComprar.addEventListener("click", mensajeDeComrpa)

function mensajeDeComrpa(){

     
    Swal.fire(
        'Muchas gracias por tu compra!',
        'Vuelve pronto <i class="bi bi-emoji-kiss"></i>',
        'success'
    )

    carroCompras.length = 0;
    localStorage.setItem("carro-compras", JSON.stringify (carroCompras));

    productosEnCarrito();


}