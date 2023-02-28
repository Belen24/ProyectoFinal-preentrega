// LISTADO DE PRODUCTOS

let productos = [

    {
        id: "Anillo-1",
        titulo: "Anillo circones",
        imagen: "./img/anillo1.png",
        detalle: "Plata 925 con aplicación de circones",
        tamaño: "Tamaños: 14 - 16 - 19 - 21",
        categoria: {
            nombre: "Anillos",
            id: "anillos",
        },
        precio: "5000",

    },

    {
        id: "Anillo-2",
        titulo: "Anillo Esmeralda",
        imagen: "./img/anillo2.png",
        detalle: "Plata 925 circones blancos y verdes",
        tamaño: "Tamaños: 19 - 26",
        categoria: {
            nombre: "Anillos",
            id: "anillos",
        },
        precio: "9000",

    },

    {
        id: "Anillo-3",
        titulo: "Anillo Flecha",
        imagen: "./img/anillo3.png",
        detalle: "Plata 925",
        tamaño: "Ajustable",
        categoria: {
            nombre: "Anillos",
            id: "anillos",
        },
        precio: "3500",

    },

    {
        id: "Anillo-4",
        titulo: "Anillo Solitario",
        imagen: "./img/anillo4.png",
        detalle: "Plata 925 con circón blanco",
        tamaño: "Tamaños: 14- 17- 19 - 26",
        categoria: {
            nombre: "Anillos",
            id: "anillos",
        },
        precio: "10500",

    },

    {
        id: "Aros-1",
        titulo: "Aro Strass y Circones",
        imagen: "./img/aros1.png",
        detalle: "Plata 925",
        tamaño: "Largo 5cm",
        categoria: {
            nombre: "Aros",
            id: "aros",
        },
        precio: "8500",

    },

    {
        id: "Aros-2",
        titulo: "Aro Strass y Circón turquesa",
        imagen: "./img/aros2.png",
        detalle: "Plata 925 ",
        tamaño: "Largo 3,9cm",
        categoria: {
            nombre: "Aros",
            id: "aros",
        },
        precio: "8500",

    },

    {
        id: "Aros-3",
        titulo: "Aro Circón",
        imagen: "./img/aros3.png",
        detalle: "Plata 925 ",
        tamaño: "circón 8mm",
        categoria: {
            nombre: "Aros",
            id: "aros",
        },
        precio: "3500",

    },

    {
        id: "Collar-1",
        titulo: "Collar Corazón",
        imagen: "./img/collar01.png",
        detalle: "Collar lapidado Plata 925 ",
        tamaño: "Largo 45cm",
        categoria: {
            nombre: "Collares",
            id: "collares",
        },
        precio: "8000",

    },

    {
        id: "Collar-2",
        titulo: "Collar Media Luna",
        imagen: "./img/collar02.png",
        detalle: "Collar lapidado Plata 925 ",
        tamaño: "Largo 45cm",
        categoria: {
            nombre: "Collares",
            id: "collares",
        },
        precio: "7500",

    },

    {
        id: "Collar-3",
        titulo: "Collar Perlas",
        imagen: "./img/collar03.png",
        detalle: "Perlas 3mm ",
        tamaño: "Largo 40cm",
        categoria: {
            nombre: "Collares",
            id: "collares",
        },
        precio: "10000",

    },
    
    {
        id: "Collar-4",
        titulo: "Collar Lunas y Estrellas",
        imagen: "./img/collar04.png",
        detalle: "Collar lapidado con piedra turquesa ",
        tamaño: "Largo 45cm",
        categoria: {
            nombre: "Collares",
            id: "collares",
        },
        precio: "7000",

    },

    {
        id: "Collar-5",
        titulo: "Collar Infinito",
        imagen: "./img/collar05.png",
        detalle: "Plata 925",
        tamaño: "Largo 45cm",
        categoria: {
            nombre: "Collares",
            id: "collares",
        },
        precio: "8000",

    },

    {
        id: "Collar-5",
        titulo: "Collar Infinito",
        imagen: "./img/collar05.png",
        detalle: "Plata 925",
        tamaño: "Largo 45cm",
        categoria: {
            nombre: "Collares",
            id: "collares",
        },
        precio: "8000",

    },

    {
        id: "Collar-6",
        titulo: "Collar Constelación",
        imagen: "./img/collar06.png",
        detalle: "Plata 925",
        tamaño: "Largo 45cm",
        categoria: {
            nombre: "Collares",
            id: "collares",
        },
        precio: "7500",

    },
    
    {
        id: "Pulsera-1",
        titulo: "Pulsera Esmeralda",
        imagen: "./img/pulsera1.png",
        detalle: "Plata 925",
        tamaño: "Largo 19cm",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras",
        },
        precio: "7500",

    },

    {
        id: "Pulsera-2",
        titulo: "Pulsera Circón",
        imagen: "./img/pulsera2.png",
        detalle: "Plata 925",
        tamaño: "Largo 19cm",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras",
        },
        precio: "5500",

    },

    {
        id: "Pulsera-3",
        titulo: "Pulsera Circón y Strass",
        imagen: "./img/pulsera3.png",
        detalle: "Plata 925",
        tamaño: "Largo 19cm",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras",
        },
        precio: "8500",

    },
    
    {
        id: "Pulsera-4",
        titulo: "Pulsera Cristal Azul",
        imagen: "./img/pulsera4.png",
        detalle: "Plata 925 con aplicaciones de circón",
        tamaño: "Largo 19cm",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras",
        },
        precio: "7500",

    },

    {
        id: "Pulsera-5",
        titulo: "Pulsera Ilusión",
        imagen: "./img/pulsera5.png",
        detalle: "Plata 925 con circón y strass blancos",
        tamaño: "Largo 19cm",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras",
        },
        precio: "6000",

    },
    
    {
        id: "Tobillera-1",
        titulo: "Tobillera Corazones",
        imagen: "./img/tobillera1.png",
        detalle: "Plata 925",
        tamaño: "Largo 26cm",
        categoria: {
            nombre: "Tobilleras",
            id: "tobilleras",
        },
        precio: "4500",

    },

    {
        id: "Tobillera-2",
        titulo: "Tobillera Solitario",
        imagen: "./img/tobillera2.png",
        detalle: "Plata 925",
        tamaño: "Largo 26cm",
        categoria: {
            nombre: "Tobilleras",
            id: "tobilleras",
        },
        precio: "5500",

    },

    {
        id: "Tobillera-3",
        titulo: "Tobillera Cristal Azul",
        imagen: "./img/tobillera3.png",
        detalle: "Plata 925 con aplicaciones de circones",
        tamaño: "Largo 26cm",
        categoria: {
            nombre: "Tobilleras",
            id: "tobilleras",
        },
        precio: "7500",

    },


]



//CAPTURA DE ELEMENTOS

let contenedorProducto = document.getElementById("contenedor");
let tituloPrincipal = document.getElementById("titulo-principal");
let numero = document.getElementById("numero");
let botonCategoria = document.querySelectorAll (".boton-categoria");
let botonCompra = document.querySelectorAll (".boton-compra");
//console.log(boton-compra);

//RENDER DE PRODUCTOS

function cargaProductos (totalProductos){

    contenedorProducto.innerHTML = "";

    totalProductos.forEach((producto) =>{
        let contenedor =document.createElement("div");
        contenedor.className = "producto"
        contenedor.innerHTML = `
            <img class="producto-img" src="${producto.imagen}">
            <div class="producto-nombre">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p>${producto.detalle}</p>
            <p>${producto.tamaño}</p>
            <p>$${producto.precio * 1.19}</p>
            <button class="boton-compra" id="${producto.id}">COMPRAR</button>
            </div>
            `;
        
            contenedorProducto.append(contenedor);
    })

    generarBotonCompra();
    
}

cargaProductos(productos);


//DISTRIBUCIÓN DE PRODUCTOS POR CATEGORIA

botonCategoria.forEach((boton) =>{
    boton.addEventListener("click", (e) => {

        botonCategoria.forEach(boton => boton.classList.remove("active"));

        e.target.classList.add("active");

        if(e.target.id != "todos"){
            let categariaProducto =productos.find(producto => producto.categoria.id === e.target.id);
            tituloPrincipal.innerText = categariaProducto.categoria.nombre;

            let btnProducto = productos.filter (producto => producto.categoria.id === e.target.id);
            cargaProductos(btnProducto);
        }
        else {
            tituloPrincipal.innerText ="Todos los productos"
            cargaProductos(productos);
        }
    })
})


// FUNCIÓN PARA CREAR LOS BOTONES DE COMPRA EN CADA UNA DE LAS CATEGORIAS
function generarBotonCompra() {
    botonCompra = document.querySelectorAll (".boton-compra");
  

    botonCompra.forEach (boton => {
        boton.addEventListener("click", productoCarrito);
    })
}

// SIMULADOR COMPRA CLIENTE

let carroCompras = JSON.parse(localStorage.getItem("carro-compras")) || [];
numeroCarrito();


//FUNCION PARA EVITAR DUPLICIDAD DE CARGA EN UN PRODUCTO Y GUARDAR DATOS EN LOCAL STORAGE
function productoCarrito(e) {

    let idBoton = e.target.id;
    //console.log (id);
    let productoSeleccionado = productos.find(producto => producto.id === idBoton);
    let buscarProducto = carroCompras.some (producto => producto.id === idBoton)

    if(buscarProducto){
        let indexFind = carroCompras.findIndex(producto => producto.id === idBoton);
        carroCompras[indexFind].cantidad++;
    }
    else {
        productoSeleccionado.cantidad = 1;
        carroCompras.push(productoSeleccionado);
    }

    numeroCarrito();

    localStorage.setItem("carro-compras", JSON.stringify (carroCompras));
    

}

//FUNCION PARA SUMAR CANTIDAD PRODUCTOS Y SE VISUALICE EN EL NUMERO DEL CARRO DE COMPRAS
function numeroCarrito(){
    let nuevoNumero = carroCompras.reduce ((acc, producto) => acc + producto.cantidad, 0)

    numero.innerText = nuevoNumero;

}