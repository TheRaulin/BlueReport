document.addEventListener('DOMContentLoaded', function() {
    const buttonReport = document.getElementById("b-report");

    buttonReport.addEventListener('click', function() {
        modalReport.classList.remove('hidden');
    });
});