document.addEventListener('DOMContentLoaded', function() {

    //Seleccionar y guardar
    const selectPrivate = document.getElementById("selectPrivate");
    const savePrivate = document.getElementById("savePrivate");
    const selectAlejandro = document.getElementById("selectAlejandro");
    const saveAlejandro = document.getElementById("saveAlejandro");
    const selectFilipo = document.getElementById("selectFilipo");
    const saveFilipo = document.getElementById("saveFilipo");
    const selectOlimpia = document.getElementById("selectOlimpia");
    const saveOlimpia = document.getElementById("saveOlimpia");
    const selectGrecia = document.getElementById("selectGrecia");
    const saveGrecia = document.getElementById("saveGrecia");

    //Modales
    const modalPrivate = document.getElementById("modalPrivate");
    const modalAlejandro = document.getElementById("modalAlejandro");
    const modalFilipo = document.getElementById("modalFilipo");
    const modalOlimpia = document.getElementById("modalOlimpia");
    const modalGrecia = document.getElementById("modalGrecia");
  
    
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
