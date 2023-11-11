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


//Creacion de vectores
const productos = JSON.parse(localStorage.getItem("ProductosVec")) || [];





//Aqui comienza su codigo
//Funciones

const cargarArrayProds = () =>{
    const P1 = new Productos(1,"Motor Rossi",500);
    const P2 = new Productos(1,"Motor FAAC",600);
    const P3 = new Productos(1,"Remera Rossi",10);
    const P4 = new Productos(1,"Remera FAAC",10);
    const P5 = new Productos(1,"Controles",20);
    productos.push(P1);
    productos.push(P2);
    productos.push(P3);
    productos.push(P4);
    productos.push(P5);
}

const guardarStorage = (clave, valor) =>{
    localStorage.setItem(clave,valor);
}



//Llamada a la funcion para cargar el vec de productos
cargarArrayProds();

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
if(productos.length != 0){
    let productosHTML = document
}
