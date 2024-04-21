function copiarTexto() {
    // Seleccionar el div
    var div = document.getElementById("miDiv");

    // Crear un elemento temporal (textarea) para copiar el texto
    var textarea = document.createElement("textarea");

    // Establecer el valor del textarea como el texto del div
    textarea.value = div.innerText;

    // Agregar el textarea al cuerpo del documento
    document.body.appendChild(textarea);

    // Seleccionar todo el texto en el textarea
    textarea.select();

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Eliminar el textarea temporal
    document.body.removeChild(textarea);

    // Mensaje de confirmación
    alert("El texto se ha copiado al portapapeles");
}

function mostrarFecha() {
    // Obtener el valor del input de fecha
    var fecha = document.getElementById("fecha").value;
    
    // Mostrar la fecha en un elemento <p>
    document.getElementById("fechaMostrada").innerText = fecha;
}

document.addEventListener('DOMContentLoaded', function() {
    const selectTurno = document.getElementById("turno");

    const buttonReport = document.getElementById("b-report");

    const selectPrivate = document.getElementById("selectPrivate");
    const savePrivate = document.getElementById("savePrivate");
    const selectAlejandro = document.getElementById("selectAlejandro");;
    const saveAlejandro = document.getElementById("saveAlejandro");
    const selectFilipo = document.getElementById("selectFilipo");;
    const saveFilipo = document.getElementById("saveFilipo");
    const selectOlimpia = document.getElementById("selectOlimpia");;
    const saveOlimpia = document.getElementById("saveOlimpia");
    const selectGrecia = document.getElementById("selectGrecia");;
    const saveGrecia = document.getElementById("saveGrecia");

    const prueba = document.getElementById("prueba");;
    
    //Modales
    const modalPrivate = document.getElementById("modalPrivate");
    const modalAlejandro = document.getElementById("modalAlejandro");
    const modalFilipo = document.getElementById("modalFilipo");
    const modalOlimpia = document.getElementById("modalOlimpia");
    const modalGrecia = document.getElementById("modalGrecia");

  

    buttonReport.addEventListener('click', function() {
        copiarTexto();
        var selectedTurno = selectTurno.value;
        console.log(selectedTurno);
    });

    //Open-close Modales
    selectPrivate.addEventListener('click', function() {
        modalPrivate.classList.remove('hidden');
    });

    savePrivate.addEventListener('click', function() {
        modalPrivate.classList.add('hidden');
    });

    //Alejandro
    selectAlejandro.addEventListener('click', function() {
        modalAlejandro.classList.remove('hidden');
    });

    saveAlejandro.addEventListener('click', function() {
        modalAlejandro.classList.add('hidden');
    });

    //Filpo
    selectFilipo.addEventListener('click', function() {
        modalFilipo.classList.remove('hidden');
    });

    saveFilipo.addEventListener('click', function() {
        modalFilipo.classList.add('hidden');
    });

    //Olimpia
    selectOlimpia.addEventListener('click', function() {
        modalOlimpia.classList.remove('hidden');
    });

    saveOlimpia.addEventListener('click', function() {
        modalOlimpia.classList.add('hidden');
    });

    //Grecia
    selectGrecia.addEventListener('click', function() {
        modalGrecia.classList.remove('hidden');
    });

    saveGrecia.addEventListener('click', function() {
        modalGrecia.classList.add('hidden');
    });

    prueba.addEventListener('click', function() {
        console.log('hola');
    });

});
