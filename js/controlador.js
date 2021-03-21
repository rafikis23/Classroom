// Classroom //
var classroom = [{
        instructor: {
            nombre: "Goku",
            correo: "goku@gmail.com",
            imagen: "img/goku.jpg",
        },
        clases: [{
                nombreClase: "Programación II",
                codigo: "CSD33XZ",
                seccion: "1300",
                descripcion: "Clase donde se enseña a programar",
                participantes: [{
                        nombre: "Krillin",
                        correo: "krillin@gmail.com",
                        imagen: "img/krillin.jpg",
                    },
                    // ...Otro participante
                ],
                anuncios: [{
                        mensaje: "Hoy es el examen",
                        fecha: "27/02/2020",
                    },
                    // ...Otro anuncio
                ],
                asignaciones: [{
                        titulo: "Tarea 1",
                        descripcion: "Entregar un programa",
                        fecha: "28/02/2020",
                    },
                    // ...Otra asignación
                ],
            },
            //...Otra clase
        ],
    }, {
        instructor: {
            nombre: "Vegeta",
            correo: "vegeta@gmail.com",
            imagen: "img/vegeta.jpg",
        },
        clases: [{
                nombreClase: "Programación Web",
                codigo: "IS-904",
                seccion: "1400",
                descripcion: "Clase donde se enseña a programar",
                participantes: [{
                        nombre: "Krillin",
                        correo: "krillin@gmail.com",
                        imagen: "img/krillin.jpg",
                    },
                    // ...Otro participante
                ],
                anuncios: [{
                        mensaje: "Hoy es el examen",
                        fecha: "27/02/2021",
                    },
                    // ...Otro anuncio
                ],
                asignaciones: [{
                        titulo: "Tarea 1",
                        descripcion: "Entregar un proyecto",
                        fecha: "28/02/2021",
                    },
                    // ...Otra asignación
                ],
            },
            //...Otra clase
        ],
    }]
    // Uso del localStorage
var localStorage = window.localStorage;
localStorage.clear
for (i = 0; i < classroom.length; i++) {
    localStorage.setItem('classroom', JSON.stringify(classroom));

}

console.log('Las classroom son', JSON.parse(localStorage.getItem('classroom')));
// Generar las cartas
/*
function generarClases() {
    let classroom = JSON.parse(localStorage.getItem('classroom'));
    for (let i = 0; classroom.length; i++) {
        var cartas = classroom[i].clases;
        for (let j = 0; cartas.length; j++) {
            let clases = cartas[j];
            console.log('Las clases son', clases.nombreClase)
        }
        document.getElementById('cartas').innerHTML +=
            `
        <div class="card border-success mb-3 " style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">${clases.nombreClase}</div>
        <div class="card-body text-success">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer bg-transparent border-success">Footer</div>
        </div>
        </div>
    `
    }


}
generarClases();
*/