class Productos {
    constructor(id_producto, nombre_producto, precio_producto){
        this.id_producto = id_producto;
        this.nombre_producto = nombre_producto;
        this.precio_producto = precio_producto;
    }
}
//Se creo bine el objeto



//creacion de variables
let usuario;
let usuarioStorage = localStorage.getItem("Usuario");
let productosStorage
let bandCar = false;
let valTotCar = 0;


//Creacion de vectores
const productos = JSON.parse(localStorage.getItem("ProductosVec")) || [];
const carrito = JSON.parse(localStorage.getItem("Carrito")) || [];




//Aqui comienza su codigo
//Funciones

const cargarArrayProds = () =>{
    const P1 = new Productos(1,"Motor Rossi",500);
    const P2 = new Productos(2,"Motor FAAC",600);
    const P3 = new Productos(3,"Remera Rossi",10);
    const P4 = new Productos(4,"Remera FAAC",10);
    const P5 = new Productos(5,"Controles Universales",20);
    const P6 = new Productos(6,"Remera IEMTEC",40);
    productos.push(P1);
    productos.push(P2);
    productos.push(P3);
    productos.push(P4);
    productos.push(P5);
    productos.push(P6);
}

const guardarStorage = (clave, valor) =>{
    localStorage.setItem(clave,valor);
}

/* const agregarCarrito = (obj) =>{
    console.log("Hola master")
    carrito.push(obj);
    console.log(carrito);
} */


//Llamada a la funcion para cargar el vec de productos
cargarArrayProds();

if(!productosStorage){
    guardarStorage("Productos",JSON.stringify(productos))
}

if(!productos){
    guardarStorage("ProductosVec", JSON.stringify(productos));
}

console.log(productos);
const entradaHTML = document.getElementById("entrada");
console.log(entradaHTML)
if(usuarioStorage){
    usuario = usuarioStorage;
    let div = document.createElement("div")
    div.innerHTML = `
    <h3>Bienvenido ${usuario}</h3>
    <sub>Ya estabamos esperandote</sub>
    `;
    entradaHTML.appendChild(div);
}else{
    let div1 = document.createElement("div");
    div1.innerHTML = `
    <h3>Hola, como estas?</h3>
    <p>En nuestra empresa nos gusta saber los nombres de nuestros clientes, por favor ingresa tu nombre de usuario en la casilla apra que podamos agregarte</p>
    <form id="formulario">
        <input type="text">
        <input type="submit" value="enviar">
    </form>
    `;
    entradaHTML.appendChild(div1);
    
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit",(e) =>{
        
        
        let input = e.target.children;
        console.log(input[0].value)
        guardarStorage("Usuario",input[0].value);
    })
}

//Seccion de Productos. 
const productosHTML = document.getElementById("productos")
/* productosHTML.className = "max-width"; */
if(productos.length != 0){
    let divProds = document.createElement("div");
    divProds.innerHTML = `
    <h3>Bienvenido a la seccion de productos</h3>
    <sub>Estos son sus productos</sub>
    `; 
    productosHTML.appendChild(divProds);
    let sectionProducts = document.createElement("section");
    productosHTML.appendChild(sectionProducts)
    sectionProducts.className = "flex";
    let i = 0;
    productos.forEach((item) =>{
        i += 1;
        let divProds2 = document.createElement("div");
        divProds2.className = "width-prods";
        divProds2.innerHTML = `
        <h2>id: ${item.id_producto}</h2>
        <p>nombre: ${item.nombre_producto}</p>
        <b>$${item.precio_producto}</b>
        <p></p>
        <input type="button" value="Click para agregar a carrito" id="button${i}">
        `;
        sectionProducts.appendChild(divProds2)

    });

    

}else{
    let divProds = document.createElement("div");
    divProds.innerHTML = `
    <h3>Todavia no hay ningun producto cargado</h3>
    `;
    productosHTML.appendChild(divProds);
}


//Seccion de carrito
const carritoHTML = document.getElementById("contCarrito");
carritoHTML.className = "flex";


//Eventos
//seccion de addEventListener Para ver cual es el button que apretan

button1.addEventListener("click", () =>{
    productSelected = productos[0];
    /* console.log(productSelected); */
    carrito.push(productSelected);
    /* console.log(carrito); */
    let divCarrito = document.createElement("div");
    divCarrito.className = "width-prods";
    divCarrito.innerHTML = `
    <h4>Producto ID: ${productSelected.id_producto}</h4>
    <p>Nombre del producto: ${productSelected.nombre_producto}</p>
    <b>Precio: $${productSelected.precio_producto}</b>
    `;
    carritoHTML.appendChild(divCarrito);
    valTotCar += productSelected.precio_producto
});

button2.addEventListener("click", () =>{
    productSelected = productos[1];
    /* console.log(productSelected); */
    carrito.push(productSelected);
    /* console.log(carrito); */
    let divCarrito = document.createElement("div");
    divCarrito.className = "width-prods";
    divCarrito.innerHTML = `
    <h4>Producto ID: ${productSelected.id_producto}</h4>
    <p>Nombre del producto: ${productSelected.nombre_producto}</p>
    <b>Precio: $${productSelected.precio_producto}</b>
    `;
    carritoHTML.appendChild(divCarrito);
    valTotCar += productSelected.precio_producto
});

button3.addEventListener("click", () =>{
    productSelected = productos[2];
    /* console.log(productSelected); */
    carrito.push(productSelected);
    /* console.log(carrito); */
    let divCarrito = document.createElement("div");
    divCarrito.className = "width-prods";
    divCarrito.innerHTML = `
    <h4>Producto ID: ${productSelected.id_producto}</h4>
    <p>Nombre del producto: ${productSelected.nombre_producto}</p>
    <b>Precio: $${productSelected.precio_producto}</b>
    `;
    carritoHTML.appendChild(divCarrito);
    valTotCar += productSelected.precio_producto
});

button4.addEventListener("click", () =>{
    productSelected = productos[3];
    /* console.log(productSelected); */
    carrito.push(productSelected);
    /* console.log(carrito); */
    let divCarrito = document.createElement("div");
    divCarrito.className = "width-prods";
    divCarrito.innerHTML = `
    <h4>Producto ID: ${productSelected.id_producto}</h4>
    <p>Nombre del producto: ${productSelected.nombre_producto}</p>
    <b>Precio: $${productSelected.precio_producto}</b>
    `;
    carritoHTML.appendChild(divCarrito);
    valTotCar += productSelected.precio_producto
});

button5.addEventListener("click", () =>{
    productSelected = productos[4]
    /* console.log(productSelected); */
    carrito.push(productSelected);
    /* console.log(carrito); */
    let divCarrito = document.createElement("div");
    divCarrito.className = "width-prods";
    divCarrito.innerHTML = `
    <h4>Producto ID: ${productSelected.id_producto}</h4>
    <p>Nombre del producto: ${productSelected.nombre_producto}</p>
    <b>Precio: $${productSelected.precio_producto}</b>
    `;
    carritoHTML.appendChild(divCarrito);
    valTotCar += productSelected.precio_producto
});

button6.addEventListener("click", () =>{
    productSelected = productos[5]
    /* console.log(productSelected); */
    carrito.push(productSelected);
    console.log(carrito.length)
    /* console.log(carrito); */
    let divCarrito = document.createElement("div");
    divCarrito.className = "width-prods";
    divCarrito.innerHTML = `
    <h4>Producto ID: ${productSelected.id_producto}</h4>
    <p>Nombre del producto: ${productSelected.nombre_producto}</p>
    <b>Precio: $${productSelected.precio_producto}</b>
    `;
    carritoHTML.appendChild(divCarrito)
    valTotCar += productSelected.precio_producto
});

let btnElimCar = document.getElementById("btnElimCar");

btnElimCar.addEventListener("click", () =>{
    console.log("hola");
    carritoHTML.remove()
});
