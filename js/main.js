const BASE = [
    {
    "id": 1,
    "nombre": "Meditación",
    "texto": "Teórico-práctico. 5 videos. 168 minutos",
    "img": "img/curso1.jpg",
    "precio": 2500,
    "cantidad":1
    },
    {
    "id": 2,
    "nombre": "Biohacking",
    "texto": "Teórico-práctico. 7 videos. 128 minutos",
    "img": "img/curso2.jpg",
    "precio": 1500,
    "cantidad":1
    },
    {
    "id": 3,
    "nombre": "Detox y energía",
    "texto": "Teórico-práctico. 7 videos. 192 minutos",
    "img": "img/curso3.jpg",
    "precio": 3500,
    "cantidad":1
    },
    {
    "id": 4,
    "nombre": "Flexibilidad",
    "texto": "Teórico-práctico. 3 videos. 118 minutos",
    "img": "img/curso4.jpg",
    "precio": 1700,
    "cantidad":1
    },
    {
    "id": 5,
    "nombre": "Mindfulness",
    "texto": "Teórico-práctico. 8 videos. 208 minutos",
    "img": "img/curso5.jpg",
    "precio": 4500,
    "cantidad":1
    },
    {
    "id": 6,
    "nombre": "Respiración",
    "texto": "Teórico-práctico. 3 videos. 98 minutos",
    "img": "img/curso6.jpg",
    "precio": 1300,
    "cantidad":1
    },


]

const carrito = JSON.parse(localStorage.getItem("cualquiercosa")) || [];

function renderizarCursos(){
    const tienda = document.getElementById('tienda');


    const botonesFiltros = [
        'Mayor Precio',
        'Menor Precio'
    ];

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    botonesFiltros.forEach((boton)=>{
        const btn = document.createElement('button');
        btn.textContent = boton;
        btn.classList.add('bot__1')

        tienda.appendChild(btn);

    })


    const btnMayorPrecio = document.querySelector ('button:nth-child(1)');
    btnMayorPrecio.addEventListener('click', ()=>{

        const course = BASE.sort((a,b)=>b.precio - a.precio);

        tienda.innerHTML = '';

        course.forEach((e)=>{

            const div = document.createElement('div');


            div.classList.add('card');
            div.classList.add('col-sm-12');
            div.classList.add('col-md-6');
            div.classList.add('col-xl-4');
            div.classList.add('cards__estilos');
            div.classList.add('card-img-top');
            div.classList.add('w-100');
            div.classList.add('card-body');
            div.classList.add('cards__fondo');
            div.classList.add('card-title');
            div.classList.add('card-text');

            div.innerHTML = `
    <div class="card col-sm-12 cards__estilos">
    <img src="${e.img}" class="card-img-top w-100">
    <div class="card-body cards__fondo">
      <h5 class="card-title">${e.nombre}</h5>
      <p class="card-text">${e.texto}</p>
      <p class="card-text">$ ${e.precio} </p>
      <button class="bot__3" id="${e.id}">Agregar</button>
    </div>
    </div>
    `

    div.querySelector('button').addEventListener('click',()=>{
        agregarCursosAlCarrito(e.id)

    })

tienda.appendChild(div);

        })

    })



    BASE.forEach((p)=>{
        
    let curso = document.createElement('div');
    curso.classList.add('card');
    curso.classList.add('col-sm-12');
    curso.classList.add('col-md-6');
    curso.classList.add('col-xl-4');
    curso.classList.add('cards__estilos');
    curso.classList.add('card-img-top');
    curso.classList.add('card-img-top');
    curso.classList.add('w-100');
    curso.classList.add('card-body');
    curso.classList.add('cards__fondo');
    curso.classList.add('card-title');
    curso.classList.add('card-text');

    curso.innerHTML = `
    <div class="card col-sm-12 cards__estilos">
    <img src="${p.img}" class="card-img-top w-100">
    <div class="card-body cards__fondo">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text">${p.texto}</p>
      <p class="card-text">$ ${p.precio} </p>
      <button class="bot__3" id="${p.id}">Agregar</button>
    </div>
    </div>
    `
tienda.appendChild(curso);

curso.querySelector('button').addEventListener('click',()=>{
    agregarCursosAlCarrito(p.id);

})
    })
}

renderizarCursos();
renderizarCarrito();



function agregarCursosAlCarrito(id){
    
    let curso = BASE.find(curso => curso.id===id);

    let cursoEnCarrito = carrito.find(curso => curso.id === id);

    if(cursoEnCarrito){
        cursoEnCarrito.cantidad++;
        console.log(carrito);
    } else{

       curso.cantidad = 1;
       
       carrito.push(curso);

       localStorage.setItem("cualquiercosa", JSON.stringify(carrito))

       console.log(carrito)
    }

    renderizarCarrito();
    calcularTotal();

}


function renderizarCarrito(){
    const d = document;
    let carritoHTML = d.querySelector('#carrito');

    carritoHTML.innerHTML = '';

    carrito.forEach((p, index)=>{

    let curso = document.createElement('div');
    curso.classList.add('card');
    curso.classList.add('col-sm-12');
    curso.classList.add('col-md-6');
    curso.classList.add('col-xl-4');
    curso.classList.add('cards__estilos');
    curso.classList.add('card-img-top');
    curso.classList.add('card-img-top');
    curso.classList.add('w-100');
    curso.classList.add('card-body');
    curso.classList.add('cards__fondo');
    curso.classList.add('card-title');
    curso.classList.add('card-text');

    curso.innerHTML = `
    <div class="card col-sm-12 cards__estilos">
    <img src="${p.img}" class="card-img-top w-100">
    <div class="card-body cards__fondo">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text">${p.texto}</p>
      <p class="card-text">$ ${p.precio} </p>
      <p class="card-text">Cantidad ${p.cantidad} </p>
      <button class="bot__3">Eliminar</button>
    </div>
    </div>
    `

    curso.querySelector('button').addEventListener('click', ()=>{

        eliminarCursoDelCarrito(index);
        
    })

    carritoHTML.appendChild(curso);

    })

}


function eliminarCursoDelCarrito(indice){

    carrito[indice].cantidad--;

    if(carrito[indice].cantidad === 0){
        carrito.splice(indice,1);
    }

    renderizarCarrito();
    calcularTotal();

}


function calcularTotal(){

let total = 0;

carrito.forEach((p)=>{

    total += p.precio * p.cantidad

})

console.log(total);

const t =  document.getElementById('total');

t.innerHTML = `<h5> Total: $ ${total}</h5>`
}