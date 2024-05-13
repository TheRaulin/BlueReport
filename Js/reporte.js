document.addEventListener('DOMContentLoaded', function() {
    totalIn = 0;
    totalOut = 0;
    
    privadasIn = 0;
    privadasOut = 0;

    const buttonReport = document.getElementById("b-report");
    const editarReporte = document.getElementById("editarReporte")

    //Saldo en caja y huespedes
    const saldoEnCaja = document.getElementById("saldoEnCaja")
    const saldoEnCajaReport = document.getElementById("saldoEnCajaReport")
    const huespedesIn = document.getElementById("huespedesIn")
    const huespedesOut = document.getElementById("huespedesOut")

    //Elementos del reporte (Privadas) 
    const containerPrivadas = document.getElementById('containerPrivadas'); 
    const txtPrivada = document.getElementById('txt-report-private');
    const Alejandria = document.getElementById('Alejandria'); 
    const Jacobo = document.getElementById('Jacobo'); 
    const Lourdes = document.getElementById('Lourdes');
    const Macedonia = document.getElementById('Macedonia');
    const Vita = document.getElementById('Vita');

    //Elementos del reporte (Alejandro)
    const containerAlejandro = document.getElementById('containerAlejandro'); 
    const alejandroBed1 = document.getElementById('alejandroBed1');
    const alejandroBed2 = document.getElementById('alejandroBed2');
    const alejandroBed3 = document.getElementById('alejandroBed3');
    const alejandroBed4 = document.getElementById('alejandroBed4');
    const alejandroBed5 = document.getElementById('alejandroBed5');
    const alejandroBed6 = document.getElementById('alejandroBed6');
    const alejandroBed7 = document.getElementById('alejandroBed7');
    const alejandroBed8 = document.getElementById('alejandroBed8');
    const alejandroBed9 = document.getElementById('alejandroBed9');
    const alejandroBed10 = document.getElementById('alejandroBed10');
    const alejandroBed11 = document.getElementById('alejandroBed11');
    const alejandroBed12 = document.getElementById('alejandroBed12');
    const alejandroBed13 = document.getElementById('alejandroBed13');
    const alejandroBed14 = document.getElementById('alejandroBed14');

    //Obtener elemtos que contienen los datos
    //Alejandro
    const bt1Alejandro = document.getElementById("bt1Alejandro");
    const bt2Alejandro = document.getElementById("bt2Alejandro");
    const bt3Alejandro = document.getElementById("bt3Alejandro");
    const bt4Alejandro = document.getElementById("bt4Alejandro");
    const bt5Alejandro = document.getElementById("bt5Alejandro");
    const bt6Alejandro = document.getElementById("bt6Alejandro");
    const bt7Alejandro = document.getElementById("bt7Alejandro");
    const bt8Alejandro = document.getElementById("bt8Alejandro");
    const bt9Alejandro = document.getElementById("bt9Alejandro");
    const bt10Alejandro = document.getElementById("bt10Alejandro");
    const bt11Alejandro = document.getElementById("bt11Alejandro");
    const bt12Alejandro = document.getElementById("bt12Alejandro");
    const bt13Alejandro = document.getElementById("bt13Alejandro");
    const bt14Alejandro = document.getElementById("bt14Alejandro");

    //Elementos del reporte (Filipo)
    const containerFilipo = document.getElementById('containerFilipo'); 
    const filipoBed1 = document.getElementById('filipoBed1');
    const filipoBed2 = document.getElementById('filipoBed2');
    const filipoBed3 = document.getElementById('filipoBed3');
    const filipoBed4 = document.getElementById('filipoBed4');
    const filipoBed5 = document.getElementById('filipoBed5');
    const filipoBed6 = document.getElementById('filipoBed6');
    const filipoBed7 = document.getElementById('filipoBed7');
    const filipoBed8 = document.getElementById('filipoBed8');
    const filipoBed9 = document.getElementById('filipoBed9');
    const filipoBed10 = document.getElementById('filipoBed10');
    const filipoBed11 = document.getElementById('filipoBed11');
    const filipoBed12 = document.getElementById('filipoBed12');
    const filipoBed13 = document.getElementById('filipoBed13');
    const filipoBed14 = document.getElementById('filipoBed14'); 
    
    //Obtener elemtos que contienen los datos
    //Filipo
    const bt1Filipo = document.getElementById("bt1Filipo");
    const bt2Filipo = document.getElementById("bt2Filipo");
    const bt3Filipo = document.getElementById("bt3Filipo");
    const bt4Filipo = document.getElementById("bt4Filipo");
    const bt5Filipo = document.getElementById("bt5Filipo");
    const bt6Filipo = document.getElementById("bt6Filipo");
    const bt7Filipo = document.getElementById("bt7Filipo");
    const bt8Filipo = document.getElementById("bt8Filipo");
    const bt9Filipo = document.getElementById("bt9Filipo");
    const bt10Filipo = document.getElementById("bt10Filipo");
    const bt11Filipo = document.getElementById("bt11Filipo");
    const bt12Filipo = document.getElementById("bt12Filipo");
    const bt13Filipo = document.getElementById("bt13Filipo");
    const bt14Filipo = document.getElementById("bt14Filipo");   
    
    //Elementos del reporte (Olimpia)
    const containerOlimpia = document.getElementById('containerOlimpia'); 
    const olimpiaBed1 = document.getElementById('olimpiaBed1');
    const olimpiaBed2 = document.getElementById('olimpiaBed2');
    const olimpiaBed3 = document.getElementById('olimpiaBed3');
    const olimpiaBed4 = document.getElementById('olimpiaBed4');
    const olimpiaBed5 = document.getElementById('olimpiaBed5');
    const olimpiaBed6 = document.getElementById('olimpiaBed6');
    
    //Obtener elemtos que contienen los datos
    //Olimpia
    const bt1Olimpia = document.getElementById("bt1Olimpia");
    const bt2Olimpia = document.getElementById("bt2Olimpia");
    const bt3Olimpia = document.getElementById("bt3Olimpia");
    const bt4Olimpia = document.getElementById("bt4Olimpia");
    const bt5Olimpia = document.getElementById("bt5Olimpia");
    const bt6Olimpia = document.getElementById("bt6Olimpia");  

    //Elementos del reporte (Grecia)
    const containerGrecia = document.getElementById('containerGrecia'); 
    //dobles
    const olimpiaBed1Doble = document.getElementById('olimpiaBed1Doble');
    const olimpiaBed2Doble = document.getElementById('olimpiaBed2Doble');
    const olimpiaBed3Doble = document.getElementById('olimpiaBed3Doble');    
    const greciaBed1 = document.getElementById('greciaBed1');
    const greciaBed2 = document.getElementById('greciaBed2');
    const greciaBed3 = document.getElementById('greciaBed3');
    const greciaBed4 = document.getElementById('greciaBed4');
    const greciaBed5 = document.getElementById('greciaBed5');
    const greciaBed6 = document.getElementById('greciaBed6');
    
    //Obtener elemtos que contienen los datos
    //Grecia
    const bt1dGrecia = document.getElementById("bt1dGrecia");
    const bt2dGrecia = document.getElementById("bt2dGrecia");
    const bt3dGrecia = document.getElementById("bt3dGrecia");
    const bt1Grecia = document.getElementById("bt1Grecia");
    const bt2Grecia = document.getElementById("bt2Grecia");
    const bt3Grecia = document.getElementById("bt3Grecia");
    const bt4Grecia = document.getElementById("bt4Grecia");
    const bt5Grecia = document.getElementById("bt5Grecia");
    const bt6Grecia = document.getElementById("bt6Grecia");      

    //Alejandria
    const btAlejandria = document.getElementById("btAlejandria");
    const r1Alejandria = document.getElementById('r1Alejandria');
    const r2Alejandria = document.getElementById('r2Alejandria');
    const huespedesAlejandria = document.getElementById("huespedesAlejandria");
    //Jacobo
    const btJacobo = document.getElementById("btJacobo");
    const r1Jacobo = document.getElementById('r1Jacobo');
    const r2Jacobo = document.getElementById('r2Jacobo');
    const huespedesJacobo = document.getElementById("huespedesJacobo");
    //Lourdes
    const btLourdes = document.getElementById("btLourdes");
    const r1Lourdes = document.getElementById('r1Lourdes');
    const r2Lourdes = document.getElementById('r2Lourdes');
    const huespedesLourdes = document.getElementById("huespedesLourdes");
    //Macedonia
    const btMacedonia = document.getElementById("btMacedonia");
    const r1Macedonia = document.getElementById('r1Macedonia');
    const r2Macedonia = document.getElementById('r2Macedonia');
    const huespedesMacedonia = document.getElementById("huespedesMacedonia");
    //Vita
    const btVita = document.getElementById("btVita");
    const r1Vita = document.getElementById('r1Vita');
    const r2Vita = document.getElementById('r2Vita');
    const huespedesVita = document.getElementById("huespedesVita");    

    editarReporte.addEventListener('click', function() {
        modalReport.classList.add('hidden');
    });

    buttonReport.addEventListener('click', function() {
        modalReport.classList.remove('hidden');

        saldoEnCajaReport.textContent = "$ " + saldoEnCaja.value;

        if(privadasOcupadas == 0){
            txtPrivada.style.display = 'none';
            containerPrivadas.style.display = 'none';
        }
        //Alejandria
        if(r1Alejandria.checked){
            huespedesAlejandria.textContent = "1";
            privadasIn += 1;
        } else if(r2Alejandria.checked) {
            privadasIn += 2; 
        }        
        if(btAlejandria.value == 0){
            Alejandria.style.display = 'none';
        }else if(btAlejandria.value == 2){
            Alejandria.classList.remove('bg-in');
            Alejandria.classList.add('bg-out');  
            //saber cuantas personas salen de privada
            if(r1Alejandria.checked){
                privadasOut += 1;
            } else {
                privadasOut += 2; 
            }  
        }
        //Jacobo
        if(r1Jacobo.checked){
            huespedesJacobo.textContent = "1";
            privadasIn += 1;
        } else if(r2Jacobo.checked){
            privadasIn += 2;
        }

        if(btJacobo.value == 0){
            Jacobo.style.display = 'none';
        } else if(btJacobo.value == 2){
            Jacobo.classList.remove('bg-in');
            Jacobo.classList.add('bg-out');
            //saber cuantas personas salen
            if(r1Jacobo.checked){
                privadasOut += 1;
            } else {
                privadasOut += 2;
            }
        }  
        //Lourdes
        if(r1Lourdes.checked){
            huespedesLourdes.textContent = "1";
            privadasIn += 1;
        } else if(r2Lourdes.checked){
            privadasIn += 2;
        } 

        if(btLourdes.value == 0){
            Lourdes.style.display = 'none';
        } else if(btLourdes.value == 2){
            Lourdes.classList.remove('bg-in');
            Lourdes.classList.add('bg-out');
            //saber cuantass personas salen
            if(r1Lourdes.checked){
                privadasOut += 1;
            } else {
                privadasOut += 2;
            } 
        }        
        //Macedonia
        if(r1Macedonia.checked){
            huespedesMacedonia.textContent = "1";
            privadasIn += 1;
        } else if(r2Macedonia.checked){
            privadasIn += 2;
        }     

        if(btMacedonia.value == 0){
            Macedonia.style.display = 'none';
        } else if(btMacedonia.value == 2){
            Macedonia.classList.remove('bg-in');
            Macedonia.classList.add('bg-out');
            //saber cuantas personas salen 
            if(r1Macedonia.checked){
                privadasOut += 1;
            } else {
                privadasOut += 2;
            }  
        }   
        //Vita
        if(r1Vita.checked){
            huespedesVita.textContent = "1";
            privadasIn += 1;
        } else if(r2Vita.checked){
            privadasIn += 2;
        }          

        if(btVita.value == 0){
            Vita.style.display = 'none';
        } else if(btVita.value == 2){
            Vita.classList.remove('bg-in');
            Vita.classList.add('bg-out');
            //saber cuantas personas salen
            if(r1Vita.checked){
                privadasOut += 1;
            } else {
                privadasOut += 2;
            }  
        }   
        
        //Compartidas (Alejandro)
        if(AlejandroIn == 0){
            containerAlejandro.style.display = 'none';
        }

        if(bt1Alejandro.value == 0){
            alejandroBed1.style.display = 'none';  
        } else if(bt1Alejandro.value == 2){
            alejandroBed1.classList.remove('bg-in');
            alejandroBed1.classList.add('bg-out');            
        }
        if(bt2Alejandro.value == 0){
            alejandroBed2.style.display = 'none';
        } else if(bt2Alejandro.value == 2){
            alejandroBed2.classList.remove('bg-in');
            alejandroBed2.classList.add('bg-out');            
        }   
        if(bt3Alejandro.value == 0){
            alejandroBed3.style.display = 'none';
        } else if(bt3Alejandro.value == 2){
            alejandroBed3.classList.remove('bg-in');
            alejandroBed3.classList.add('bg-out');            
        }    
        if(bt4Alejandro.value == 0){
            alejandroBed4.style.display = 'none';
        } else if(bt4Alejandro.value == 2){
            alejandroBed4.classList.remove('bg-in');
            alejandroBed4.classList.add('bg-out');            
        }   
        if(bt5Alejandro.value == 0){
            alejandroBed5.style.display = 'none';
        } else if(bt5Alejandro.value == 2){
            alejandroBed5.classList.remove('bg-in');
            alejandroBed5.classList.add('bg-out');            
        } 
        if(bt6Alejandro.value == 0){
            alejandroBed6.style.display = 'none';
        } else if(bt6Alejandro.value == 2){
            alejandroBed6.classList.remove('bg-in');
            alejandroBed6.classList.add('bg-out');            
        } 
        if(bt7Alejandro.value == 0){
            alejandroBed7.style.display = 'none';
        } else if(bt7Alejandro.value == 2){
            alejandroBed7.classList.remove('bg-in');
            alejandroBed7.classList.add('bg-out');            
        }   
        if(bt8Alejandro.value == 0){
            alejandroBed8.style.display = 'none';
        } else if(bt8Alejandro.value == 2){
            alejandroBed8.classList.remove('bg-in');
            alejandroBed8.classList.add('bg-out');            
        }   
        if(bt9Alejandro.value == 0){
            alejandroBed9.style.display = 'none';
        } else if(bt9Alejandro.value == 2){
            alejandroBed9.classList.remove('bg-in');
            alejandroBed9.classList.add('bg-out');            
        }    
        if(bt10Alejandro.value == 0){
            alejandroBed10.style.display = 'none';
        } else if(bt10Alejandro.value == 2){
            alejandroBed10.classList.remove('bg-in');
            alejandroBed10.classList.add('bg-out');            
        }    
        if(bt11Alejandro.value == 0){
            alejandroBed11.style.display = 'none';
        } else if(bt11Alejandro.value == 2){
            alejandroBed11.classList.remove('bg-in');
            alejandroBed11.classList.add('bg-out');            
        }     
        if(bt12Alejandro.value == 0){
            alejandroBed12.style.display = 'none';
        } else if(bt12Alejandro.value == 2){
            alejandroBed12.classList.remove('bg-in');
            alejandroBed12.classList.add('bg-out');            
        }      
        if(bt13Alejandro.value == 0){
            alejandroBed13.style.display = 'none';
        } else if(bt13Alejandro.value == 2){
            alejandroBed13.classList.remove('bg-in');
            alejandroBed13.classList.add('bg-out');            
        }  
        if(bt14Alejandro.value == 0){
            alejandroBed14.style.display = 'none';
        } else if(bt14Alejandro.value == 2){
            alejandroBed14.classList.remove('bg-in');
            alejandroBed14.classList.add('bg-out');            
        }    
        
        //Compartidas (Filipo)
        if(FilipoIn == 0){
            containerFilipo.style.display = 'none';
        }

        if(bt1Filipo.value == 0){
            filipoBed1.style.display = 'none';  
        } else if(bt1Filipo.value == 2){
            filipoBed1.classList.remove('bg-in');
            filipoBed1.classList.add('bg-out');            
        }
        if(bt2Filipo.value == 0){
            filipoBed2.style.display = 'none';
        } else if(bt2Filipo.value == 2){
            filipoBed2.classList.remove('bg-in');
            filipoBed2.classList.add('bg-out');            
        }   
        if(bt3Filipo.value == 0){
            filipoBed3.style.display = 'none';
        } else if(bt3Filipo.value == 2){
            filipoBed3.classList.remove('bg-in');
            filipoBed3.classList.add('bg-out');            
        }    
        if(bt4Filipo.value == 0){
            filipoBed4.style.display = 'none';
        } else if(bt4Filipo.value == 2){
            filipoBed4.classList.remove('bg-in');
            filipoBed4.classList.add('bg-out');            
        }   
        if(bt5Filipo.value == 0){
            filipoBed5.style.display = 'none';
        } else if(bt5Filipo.value == 2){
            filipoBed5.classList.remove('bg-in');
            filipoBed5.classList.add('bg-out');            
        } 
        if(bt6Filipo.value == 0){
            filipoBed6.style.display = 'none';
        } else if(bt6Filipo.value == 2){
            filipoBed6.classList.remove('bg-in');
            filipoBed6.classList.add('bg-out');            
        } 
        if(bt7Filipo.value == 0){
            filipoBed7.style.display = 'none';
        } else if(bt7Filipo.value == 2){
            filipoBed7.classList.remove('bg-in');
            filipoBed7.classList.add('bg-out');            
        }   
        if(bt8Filipo.value == 0){
            filipoBed8.style.display = 'none';
        } else if(bt8Filipo.value == 2){
            filipoBed8.classList.remove('bg-in');
            filipoBed8.classList.add('bg-out');            
        }   
        if(bt9Filipo.value == 0){
            filipoBed9.style.display = 'none';
        } else if(bt9Filipo.value == 2){
            filipoBed9.classList.remove('bg-in');
            filipoBed9.classList.add('bg-out');            
        }    
        if(bt10Filipo.value == 0){
            filipoBed10.style.display = 'none';
        } else if(bt10Filipo.value == 2){
            filipoBed10.classList.remove('bg-in');
            filipoBed10.classList.add('bg-out');            
        }    
        if(bt11Filipo.value == 0){
            filipoBed11.style.display = 'none';
        } else if(bt11Filipo.value == 2){
            filipoBed11.classList.remove('bg-in');
            filipoBed11.classList.add('bg-out');            
        }     
        if(bt12Filipo.value == 0){
            filipoBed12.style.display = 'none';
        } else if(bt12Filipo.value == 2){
            filipoBed12.classList.remove('bg-in');
            filipoBed12.classList.add('bg-out');            
        }      
        if(bt13Filipo.value == 0){
            filipoBed13.style.display = 'none';
        } else if(bt13Filipo.value == 2){
            filipoBed13.classList.remove('bg-in');
            filipoBed13.classList.add('bg-out');            
        }  
        if(bt14Filipo.value == 0){
            filipoBed14.style.display = 'none';
        } else if(bt14Filipo.value == 2){
            filipoBed14.classList.remove('bg-in');
            filipoBed14.classList.add('bg-out');            
        }   
        
        //Compartidas (Olimpia)
        if(OlimpiaIn == 0){
            containerOlimpia.style.display = 'none';
        }

        if(bt1Olimpia.value == 0){
            olimpiaBed1.style.display = 'none';  
        } else if(bt1Olimpia.value == 2){
            olimpiaBed1.classList.remove('bg-in');
            olimpiaBed1.classList.add('bg-out');            
        }
        if(bt2Olimpia.value == 0){
            olimpiaBed2.style.display = 'none';
        } else if(bt2Olimpia.value == 2){
            olimpiaBed2.classList.remove('bg-in');
            olimpiaBed2.classList.add('bg-out');            
        }   
        if(bt3Olimpia.value == 0){
            olimpiaBed3.style.display = 'none';
        } else if(bt3Olimpia.value == 2){
            olimpiaBed3.classList.remove('bg-in');
            olimpiaBed3.classList.add('bg-out');            
        }    
        if(bt4Olimpia.value == 0){
            olimpiaBed4.style.display = 'none';
        } else if(bt4Olimpia.value == 2){
            olimpiaBed4.classList.remove('bg-in');
            olimpiaBed4.classList.add('bg-out');            
        }   
        if(bt5Olimpia.value == 0){
            olimpiaBed5.style.display = 'none';
        } else if(bt5Olimpia.value == 2){
            olimpiaBed5.classList.remove('bg-in');
            olimpiaBed5.classList.add('bg-out');            
        } 
        if(bt6Olimpia.value == 0){
            olimpiaBed6.style.display = 'none';
        } else if(bt6Olimpia.value == 2){
            olimpiaBed6.classList.remove('bg-in');
            olimpiaBed6.classList.add('bg-out');            
        }     
        
        //Compartidas (Grecia)
        if(GreciaIn == 0){
            containerGrecia.style.display = 'none';
        }
        //Dobles
        if(bt1dGrecia.value == 0){
            greciaBed1Doble.style.display = 'none';  
        } else if(bt1dGrecia.value == 2){
            greciaBed1Doble.classList.remove('bg-in');
            greciaBed1Doble.classList.add('bg-out');            
        }
        if(bt2dGrecia.value == 0){
            greciaBed2Doble.style.display = 'none';
        } else if(bt2dGrecia.value == 2){
            greciaBed2Doble.classList.remove('bg-in');
            greciaBed2Doble.classList.add('bg-out');            
        }   
        if(bt3dGrecia.value == 0){
            greciaBed3Doble.style.display = 'none';
        } else if(bt3dGrecia.value == 2){
            greciaBed3Doble.classList.remove('bg-in');
            greciaBed3Doble.classList.add('bg-out');            
        }         
        //Normales
        if(bt1Grecia.value == 0){
            greciaBed1.style.display = 'none';  
        } else if(bt1Grecia.value == 2){
            greciaBed1.classList.remove('bg-in');
            greciaBed1.classList.add('bg-out');            
        }
        if(bt2Grecia.value == 0){
            greciaBed2.style.display = 'none';
        } else if(bt2Grecia.value == 2){
            greciaBed2.classList.remove('bg-in');
            greciaBed2.classList.add('bg-out');            
        }   
        if(bt3Grecia.value == 0){
            greciaBed3.style.display = 'none';
        } else if(bt3Grecia.value == 2){
            greciaBed3.classList.remove('bg-in');
            greciaBed3.classList.add('bg-out');            
        }    
        if(bt4Grecia.value == 0){
            greciaBed4.style.display = 'none';
        } else if(bt4Grecia.value == 2){
            greciaBed4.classList.remove('bg-in');
            greciaBed4.classList.add('bg-out');            
        }   
        if(bt5Grecia.value == 0){
            greciaBed5.style.display = 'none';
        } else if(bt5Grecia.value == 2){
            greciaBed5.classList.remove('bg-in');
            greciaBed5.classList.add('bg-out');            
        } 
        if(bt6Grecia.value == 0){
            greciaBed6.style.display = 'none';
        } else if(bt6Grecia.value == 2){
            greciaBed6.classList.remove('bg-in');
            greciaBed6.classList.add('bg-out');            
        }    
        
        //Logica de huesped adentro y salida
        totalIn = privadasIn + AlejandroIn + FilipoIn + OlimpiaIn + GreciaIn;
        totalOut = privadasOut + AlejandroOut + FilipoOut + OlimpiaOut + GreciaOut;

        huespedesIn.textContent = totalIn;
        huespedesOut.textContent = totalOut;
        console.log(saldoEnCaja.textContent)
    }); 
});