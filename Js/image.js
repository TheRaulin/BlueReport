document.getElementById('finalizar').addEventListener('click', function() {
    var bedsElements = document.querySelectorAll('.beds');
        bedsElements.forEach(function(element) {
                element.classList.add('mt-[-40%]');
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
    setTimeout(function() {
        location.reload();
    }, 2000);
});

