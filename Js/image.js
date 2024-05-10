document.getElementById('finalizar').addEventListener('click', function() {
    //camas de un cuerpo
    const bedsElements = document.querySelectorAll('.beds');
    //el nombre de las camas
    const rooms = document.querySelectorAll('.room');
    //los container de las camas y sus nombres
    const cRooms = document.querySelectorAll('.cRoom');
    //camas dobles de grecia
    const dsGrecia = document.querySelectorAll('.dGrecia');
    //Habitaciones privadas
    const privadas = document.querySelectorAll('.privada');
    //Texto encabecado
    const txtBlue = document.getElementById('txtBlue');
    const txtReport = document.getElementById('txtReport');

        txtBlue.classList.add('mt-[-2vh]');
        txtReport.classList.add('mb-[2vh]');

        bedsElements.forEach(function(element) {
                element.classList.add('mt-[-50%]');
        });     

        rooms.forEach(function(room) {
            room.classList.add('mb-[4%]');
        });            

        cRooms.forEach(function(cRoom) {
            cRoom.classList.add('pt-[0.3%]');
        });        

        dsGrecia.forEach(function(dGrecia) {
            dGrecia.classList.add('mt-[-26%]');
        });  

        privadas.forEach(function(privada) {
            privada.classList.add('mt-[-2.1vh]');
        });                   
        
    const content = document.getElementById('content');    
    content.classList.add('bluefondo');

    setTimeout(function() {
        html2canvas(document.getElementById('content')).then(function(canvas) {
            canvas.toBlob(function(blob) {
                // Crear un enlace de descarga
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'imagen.png'; // Nombre de archivo para la descarga
    
                // Simular clic en el enlace
                a.click();
    
                // Limpiar recursos
                URL.revokeObjectURL(a.href);
    
                console.log('La imagen se ha descargado correctamente.');
            }, 'image/png');
        });  
    }, 100);    
});

