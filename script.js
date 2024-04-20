document.addEventListener('DOMContentLoaded', function() {
    const selectTurno = document.getElementById("turno");
    const buttonReport = document.getElementById("b-report");


    buttonReport.addEventListener('click', function() {
        var selectedTurno = selectTurno.value;
        console.log(selectedTurno);
    });
});
