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
    const prueba = document.getElementById("prueba");;
    
    //Modales
    const modalPrivate = document.getElementById("modalPrivate");

  

    buttonReport.addEventListener('click', function() {
        copiarTexto();
        var selectedTurno = selectTurno.value;
        console.log(selectedTurno);
    });

    selectPrivate.addEventListener('click', function() {
        modalPrivate.classList.remove('hidden');
    });

    prueba.addEventListener('click', function() {
        console.log('hola');
    });

});
