const BBDD = [
    {
        "id": 1,
        "img": "./assets/img/sol.jpg",
        "tipo": 'Entrenamiento',
        "dia": 'lunes',
        "horario": 13,
        "instructor": 'Sol',
    },
    {
        "id": 2,
        "img": "./assets/img/martin.jpg",
        "tipo": 'Entrenamiento',
        "dia": 'lunes',
        "horario": 18,
        "instructor": 'Martín',
    },
    {
        "id": 3,
        "img": "./assets/img/martin.jpg",
        "tipo": 'Práctica completa',
        "dia": 'lunes',
        "horario": 20,
        "instructor": 'Martín',
    },
    {
        "id": 4,
        "img": "./assets/img/martin.jpg",
        "tipo": 'Entrenamiento',
        "dia": 'martes',
        "horario": 8,
        "instructor": 'Martín',
    },
    {
        "id": 5,
        "img": "./assets/img/sol.jpg",
        "tipo": 'Entrenamiento',
        "dia": 'martes',
        "horario": 17,
        "instructor": 'Sol',
    },
    { 
        "id": 6,
        "img": "./assets/img/martin.jpg",
        "tipo": 'Práctica completa',
        "dia": 'martes',
        "horario": 18,
        "instructor": 'Martín',
    },
    {
        "id": 7,
        "img": "./assets/img/sol.jpg",
        "tipo": 'Práctica completa',
        "dia": 'martes',
        "horario": 19,
        "instructor": 'Sol',
    },
    {
        "id": 8,
        "img": "./assets/img/martin.jpg",
        "tipo": 'Entrenamiento',
        "dia": 'martes',
        "horario": 20,
        "instructor": 'Martín',
      },
    ];


const reserva = [];


function renderizarPracticas(){

    const escuela = document.getElementById('escuela');  

    const btnFiltros = [
        'Alfabeticamente', 
        'Por Instructor', 
        'Por Día'
        ];


    const divContainer = document.createElement('div');
    divContainer.classList.add('container', 'text-center');

    btnFiltros.forEach((btn)=> {
        
        const boton = document.createElement('button');
        boton.textContent = btn;
        boton.classList.add('btn', 'btn-primary', 'm-2');

        escuela.appendChild(boton);
    })

    // Creacion
    const btnAlfabetico = document.querySelector('button:nth-child(1)');
    btnAlfabetico.addEventListener('click', ()=>{
        
        const practice = BBDD.sort((a,b)=> b.horario - a.horario);

        console.log(practice);

        escuela.innerHTML = '';

        practice.forEach((e)=>{
            
            console.log(e);
            const div = document.createElement('div');

            div.classList.add('col-12');
            div.classList.add('col-md-4');
            div.classList.add('mb-5');
            div.classList.add('d-flex');
            div.classList.add('justify-content-center');

            div.innerHTML = `
            <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${e.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.tipo}</h5>
                <p>${p.dia} ${p.horario} hs.</p>
                <button class="btn btn-primary" id="${e.id}">Añadir reserva</button>
            </div>
            </div>
        `
            div.querySelector('button').addEventListener('click', ()=>{
                agregarPracticasAlreserva(e.id);
            
            })

            escuela.appendChild(div);
        })

    })



    BBDD.forEach((p)=> {
        
        let practica = document.createElement('div');
        practica.classList.add('col-12');
        practica.classList.add('col-md-4');
        practica.classList.add('mb-5');
        practica.classList.add('d-flex');
        practica.classList.add('justify-content-center');

        practica.innerHTML = `
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.tipo}</h5>
                <p>${p.dia} ${p.horario} hs.</p>
                <h6 class="card-title"> con ${p.instructor}</h6>
                <button class="btn btn-primary" id="${p.id}">Añadir reserva</button>
            </div>
        </div>
        `

        escuela.appendChild(practica);

        practica.querySelector('button').addEventListener('click', ()=>{
            
            agregarPracticasAlReserva(p.id);
            
        })

    })

}

renderizarPracticas();

function agregarPracticasAlReserva(id){
    
    let practica = BBDD.find(practica => practica.id === id);

    let practicaEnReserva = reserva.find(practica => practica.id === id);

    if(practicaEnReserva){
        
        practicaEnReserva.cantidad++;

        console.log(reserva);

        alert(`La cantidad del practica ${practica.nombre} fue modificada`);

    }else {
        
        practica.cantidad = 1;

        reserva.push(practica);

        console.log(reserva);

        alert('Clase reservada')
    }

    renderizarReserva();
    calcularTotal();
}


function renderizarReserva(){

    const d = document;
    let reservaHTML = d.querySelector('#reserva');

    reservaHTML.innerHTML = '';

    reserva.forEach((p, index)=> {
    
        let practica = document.createElement('div');
        practica.classList.add('col-12');
        practica.classList.add('col-md-4');
        practica.classList.add('mb-5');
        practica.classList.add('d-flex');
        practica.classList.add('justify-content-center');

        practica.innerHTML = `
        
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>${p.precio}€</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `

        practica.querySelector('button').addEventListener('click', ()=>{
        
            eliminarPracticaDelReserva(index)
        })

        reservaHTML.appendChild(practica);
    })
}

function eliminarPracticaDelReserva(indice){

    reserva[indice].cantidad--;
    alert(`La cantidad de practicas ${reserva[indice].nombre} disminuyo`);

    if(reserva[indice].cantidad === 0){

        reserva.splice(indice,1);
        alert('La practica fue eliminada de la reserva');
    }

    renderizarReserva();
}