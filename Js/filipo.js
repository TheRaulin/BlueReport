document.addEventListener('DOMContentLoaded', function() {
    //variables globales
    let privadasOcupadas = 0;

    //Alejandria elementos
    const btAlejandria = document.getElementById("btAlejandria");
    const trAlejandria = document.getElementById('trAlejandria');
    const r1Alejandria = document.getElementById('r1Alejandria');
    const r2Alejandria = document.getElementById('r2Alejandria');
    const cbAlejandria = document.getElementById('cbAlejandria'); 
    //Jacobo Elementos
    const btJacobo = document.getElementById("btJacobo");
    const trJacobo = document.getElementById('trJacobo');
    const r1Jacobo = document.getElementById('r1Jacobo');
    const r2Jacobo = document.getElementById('r2Jacobo');
    const cbJacobo = document.getElementById('cbJacobo'); 
    //Lourdes Elementos
    const btLourdes = document.getElementById("btLourdes");
    const trLourdes = document.getElementById('trLourdes');
    const r1Lourdes = document.getElementById('r1Lourdes');
    const r2Lourdes = document.getElementById('r2Lourdes');
    const cbLourdes = document.getElementById('cbLourdes'); 
    //Macedonia Elementos
    const btMacedonia = document.getElementById("btMacedonia");
    const trMacedonia = document.getElementById('trMacedonia');
    const r1Macedonia = document.getElementById('r1Macedonia');
    const r2Macedonia = document.getElementById('r2Macedonia');
    const cbMacedonia = document.getElementById('cbMacedonia'); 

    //Vita Elementos
    const btVita = document.getElementById("btVita");
    const trVita = document.getElementById('trVita');
    const r1Vita = document.getElementById('r1Vita');
    const r2Vita = document.getElementById('r2Vita'); 
    const cbVita = document.getElementById('cbVita');  
    
    //Alejandria Eventos ----------------------------------------------------------------
    //inabilita el checkbox y radio 
    if(btAlejandria.value == 0){
        cbAlejandria.disabled = true;
        r1Alejandria.disabled = true;
        r2Alejandria.disabled = true;
    }
    btAlejandria.addEventListener('click', function() {
        let valor = btAlejandria.value;
        //evento del click del boton alejandria
        if (valor=="0"){
            privadasOcupadas += 1;
            r2Alejandria.checked = true;
            trAlejandria.classList.add('bg-in', 'text-white');
            btAlejandria.value =1;
            cbAlejandria.disabled = false;
            r1Alejandria.disabled = false;
            r2Alejandria.disabled = false;
        } else {
            privadasOcupadas -= 1;
            r2Alejandria.checked = false;
            r1Alejandria.checked = false;
            trAlejandria.classList.remove('bg-in', 'text-white');
            btAlejandria.value = 0;
            cbAlejandria.disabled = true;
            r1Alejandria.disabled = true;
            r2Alejandria.disabled = true;
            if(cbAlejandria.checked){
                cbAlejandria.checked = false;
                trAlejandria.classList.remove('bg-out', 'text-white');
            }
        }   
    }); 
    //evento del checkbox de alejndria
    cbAlejandria.addEventListener('change', function() {
        if (this.checked) {
            trAlejandria.classList.add('bg-out');
        } else {
            trAlejandria.classList.remove('bg-out');
        }
    });
    
    //Eventos Jacobo --------------------------------------------------------------------
    //inabilita el checkbox y radio 
    if(btJacobo.value == 0){
        cbJacobo.disabled = true;
        r1Jacobo.disabled = true;
        r2Jacobo.disabled = true;
    }
    btJacobo.addEventListener('click', function() {
        let valor = btJacobo.value;
        if (valor=="0"){
            privadasOcupadas += 1;
            r2Jacobo.checked = true;
            trJacobo.classList.add('bg-in', 'text-white');
            btJacobo.value =1;
            cbJacobo.disabled = false;
            r1Jacobo.disabled = false;
            r2Jacobo.disabled = false;
        } else {
            privadasOcupadas -= 1;
            r2Jacobo.checked = false;
            r1Jacobo.checked = false;
            trJacobo.classList.remove('bg-in', 'text-white');
            btJacobo.value = 0;
            cbJacobo.disabled = true;
            r1Jacobo.disabled = true;
            r2Jacobo.disabled = true;
            if(cbJacobo.checked){
                cbJacobo.checked = false;
                trJacobo.classList.remove('bg-out', 'text-white');
            }
        }   
    }); 
    //evento del checkbox de Jacobo
    cbJacobo.addEventListener('change', function() {
        if (this.checked) {
            trJacobo.classList.add('bg-out');
        } else {
            trJacobo.classList.remove('bg-out');
        }
    });

    //Eventos Lourdes --------------------------------------------------------------------
    //inabilita el checkbox y radio 
    if(btLourdes.value == 0){
        cbLourdes.disabled = true;
        r1Lourdes.disabled = true;
        r2Lourdes.disabled = true;
    }
    btLourdes.addEventListener('click', function() {
        let valor = btLourdes.value;
        if (valor=="0"){
            privadasOcupadas += 1;
            r2Lourdes.checked = true;
            trLourdes.classList.add('bg-in', 'text-white');
            btLourdes.value =1;
            cbLourdes.disabled = false;
            r1Lourdes.disabled = false;
            r2Lourdes.disabled = false;
        } else {
            privadasOcupadas -= 1;
            r2Lourdes.checked = false;
            r1Lourdes.checked = false;
            trLourdes.classList.remove('bg-in', 'text-white');
            btLourdes.value = 0;
            cbLourdes.disabled = true;
            r1Lourdes.disabled = true;
            r2Lourdes.disabled = true;
            if(cbLourdes.checked){
                cbLourdes.checked = false;
                trLourdes.classList.remove('bg-out', 'text-white');
            }
        }   
    }); 
    //evento del checkbox de Lourdes
    cbLourdes.addEventListener('change', function() {
        if (this.checked) {
            trLourdes.classList.add('bg-out');
        } else {
            trLourdes.classList.remove('bg-out');
        }
    });

    //Eventos Macedonia --------------------------------------------------------------------
    //inabilita el checkbox y radio 
    if(btMacedonia.value == 0){
        cbMacedonia.disabled = true;
        r1Macedonia.disabled = true;
        r2Macedonia.disabled = true;
    }
    btMacedonia.addEventListener('click', function() {
        let valor = btMacedonia.value;
        if (valor=="0"){
            privadasOcupadas += 1;
            r2Macedonia.checked = true;
            trMacedonia.classList.add('bg-in', 'text-white');
            btMacedonia.value =1;
            cbMacedonia.disabled = false;
            r1Macedonia.disabled = false;
            r2Macedonia.disabled = false;
        } else {
            privadasOcupadas -= 1;
            r2Macedonia.checked = false;
            r1Macedonia.checked = false;
            trMacedonia.classList.remove('bg-in', 'text-white');
            btMacedonia.value = 0;
            cbMacedonia.disabled = true;
            r1Macedonia.disabled = true;
            r2Macedonia.disabled = true;
            if(cbMacedonia.checked){
                cbMacedonia.checked = false;
                trMacedonia.classList.remove('bg-out', 'text-white');
            }
        }   
    }); 
    //evento del checkbox de Macedonia
    cbMacedonia.addEventListener('change', function() {
        if (this.checked) {
            trMacedonia.classList.add('bg-out');
        } else {
            trMacedonia.classList.remove('bg-out');
        }
    });

    //Eventos Vita --------------------------------------------------------------------
    //inabilita el checkbox y radio 
    if(btVita.value == 0){
        cbVita.disabled = true;
        r1Vita.disabled = true;
        r2Vita.disabled = true;
    }
    btVita.addEventListener('click', function() {
        let valor = btVita.value;
        if (valor=="0"){
            privadasOcupadas += 1;
            r2Vita.checked = true;
            trVita.classList.add('bg-in', 'text-white');
            btVita.value =1;
            cbVita.disabled = false;
            r1Vita.disabled = false;
            r2Vita.disabled = false;
        } else {
            privadasOcupadas -= 1;
            r2Vita.checked = false;
            r1Vita.checked = false;
            trVita.classList.remove('bg-in', 'text-white');
            btVita.value = 0;
            cbVita.disabled = true;
            r1Vita.disabled = true;
            r2Vita.disabled = true;
            if(cbVita.checked){
                cbVita.checked = false;
                trVita.classList.remove('bg-out', 'text-white');
            }
        }   
    }); 
    //evento del checkbox de Vita
    cbVita.addEventListener('change', function() {
        if (this.checked) {
            trVita.classList.add('bg-out');
        } else {
            trVita.classList.remove('bg-out');
        }
    });   
});
