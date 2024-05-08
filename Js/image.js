document.getElementById('finalizar').addEventListener('click', function() {
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
});
