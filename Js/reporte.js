document.addEventListener('DOMContentLoaded', function() {
    const buttonReport = document.getElementById("b-report");

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

    //Alejandria
    const btAlejandria = document.getElementById("btAlejandria");
    const r1Alejandria = document.getElementById('r1Alejandria');
    const huespedesAlejandria = document.getElementById("huespedesAlejandria");
    //Jacobo
    const btJacobo = document.getElementById("btJacobo");
    const r1Jacobo = document.getElementById('r1Jacobo');
    const huespedesJacobo = document.getElementById("huespedesJacobo");
    //Lourdes
    const btLourdes = document.getElementById("btLourdes");
    const r1Lourdes = document.getElementById('r1Lourdes');
    const huespedesLourdes = document.getElementById("huespedesLourdes");
    //Macedonia
    const btMacedonia = document.getElementById("btMacedonia");
    const r1Macedonia = document.getElementById('r1Macedonia');
    const huespedesMacedonia = document.getElementById("huespedesMacedonia");
    //Vita
    const btVita = document.getElementById("btVita");
    const r1Vita = document.getElementById('r1Vita');
    const huespedesVita = document.getElementById("huespedesVita");    

    buttonReport.addEventListener('click', function() {
        modalReport.classList.remove('hidden');

        if(privadasOcupadas == 0){
            txtPrivada.style.display = 'none';
            containerPrivadas.style.display = 'none';
        }
        //Alejandria
        if(r1Alejandria.checked){
            huespedesAlejandria.textContent = "1";
        }        
        if(btAlejandria.value == 0){
            Alejandria.style.display = 'none';
        }else if(btAlejandria.value == 2){
            Alejandria.classList.remove('bg-in');
            Alejandria.classList.add('bg-out');
        }
        //Jacobo
        if(r1Jacobo.checked){
            huespedesJacobo.textContent = "1";
        }  
        if(btJacobo.value == 0){
            Jacobo.style.display = 'none';
        } else if(btJacobo.value == 2){
            Jacobo.classList.remove('bg-in');
            Jacobo.classList.add('bg-out');
        }  
        //Lourdes
        if(r1Lourdes.checked){
            huespedesLourdes.textContent = "1";
        }  
        if(btLourdes.value == 0){
            Lourdes.style.display = 'none';
        } else if(btLourdes.value == 2){
            Lourdes.classList.remove('bg-in');
            Lourdes.classList.add('bg-out');
        }        
        //Macedonia
        if(r1Macedonia.checked){
            huespedesMacedonia.textContent = "1";
        }          
        if(btMacedonia.value == 0){
            Macedonia.style.display = 'none';
        } else if(btMacedonia.value == 2){
            Macedonia.classList.remove('bg-in');
            Macedonia.classList.add('bg-out');
        }   
        //Vita
        if(r1Vita.checked){
            huespedesVita.textContent = "1";
        }          
        if(btVita.value == 0){
            Vita.style.display = 'none';
        } else if(btVita.value == 2){
            Vita.classList.remove('bg-in');
            Vita.classList.add('bg-out');
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
    }); 
});