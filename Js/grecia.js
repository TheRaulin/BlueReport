document.addEventListener('DOMContentLoaded', function() {
    GreciaIn = 0;
    GreciaOut = 0;

    //Dobles
    const bt1dGrecia = document.getElementById("bt1dGrecia");
    const bt2dGrecia = document.getElementById("bt2dGrecia");
    const bt3dGrecia = document.getElementById("bt3dGrecia");
    //Normales
    const bt1Grecia = document.getElementById("bt1Grecia");
    const bt2Grecia = document.getElementById("bt2Grecia");
    const bt3Grecia = document.getElementById("bt3Grecia");
    const bt4Grecia = document.getElementById("bt4Grecia");
    const bt5Grecia = document.getElementById("bt5Grecia");
    const bt6Grecia = document.getElementById("bt6Grecia");

    //Cama Doble 1 Grecia ---------------------------------------------------------------- 1
    bt1dGrecia.addEventListener('click', function() {
        if(bt1dGrecia.value == 0) {
            GreciaIn += 1;
            bt1dGrecia.value = 1;
            bt1dGrecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt1dGrecia.value == 1){
            bt1dGrecia.value = 2;
            bt1dGrecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt1dGrecia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            GreciaOut +=1;
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt1dGrecia.value = 0;
            bt1dGrecia.classList.remove('bg-out', 'text-white', 'border-inBorder');           
        }
    });  

    //Cama Doble 2 Grecia ---------------------------------------------------------------- 2
    bt2dGrecia.addEventListener('click', function() {
        if(bt2dGrecia.value == 0) {
            GreciaIn += 1;
            bt2dGrecia.value = 1;
            bt2dGrecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt2dGrecia.value == 1){
            bt2dGrecia.value = 2;
            bt2dGrecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt2dGrecia.classList.add('bg-out', 'text-white', 'border-inBorder');
            GreciaOut +=1;
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt2dGrecia.value = 0;
            bt2dGrecia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
        console.log(GreciaOut)
    });    

    //Cama Doble 3 Grecia ---------------------------------------------------------------- 3
    bt3dGrecia.addEventListener('click', function() {
        if(bt3dGrecia.value == 0) {
            GreciaIn += 1;
            bt3dGrecia.value = 1;
            bt3dGrecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt3dGrecia.value == 1){
            bt3dGrecia.value = 2;
            bt3dGrecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt3dGrecia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            GreciaOut +=1;
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt3dGrecia.value = 0;
            bt3dGrecia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 

    //Cama 1 Grecia ---------------------------------------------------------------- 1
    bt1Grecia.addEventListener('click', function() {
        if(bt1Grecia.value == 0) {
            GreciaIn += 1;
            bt1Grecia.value = 1;
            bt1Grecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt1Grecia.value == 1){
            bt1Grecia.value = 2;
            bt1Grecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt1Grecia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            GreciaOut +=1;
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt1Grecia.value = 0;
            bt1Grecia.classList.remove('bg-out', 'text-white', 'border-inBorder');           
        }
    });  

    //Cama 2 Grecia ---------------------------------------------------------------- 2
    bt2Grecia.addEventListener('click', function() {
        if(bt2Grecia.value == 0) {
            GreciaIn += 1;
            bt2Grecia.value = 1;
            bt2Grecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt2Grecia.value == 1){
            bt2Grecia.value = 2;
            bt2Grecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt2Grecia.classList.add('bg-out', 'text-white', 'border-inBorder');
            GreciaOut +=1;
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt2Grecia.value = 0;
            bt2Grecia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
        console.log(GreciaOut)
    });    

    //Cama 3 Grecia ---------------------------------------------------------------- 3
    bt3Grecia.addEventListener('click', function() {
        if(bt3Grecia.value == 0) {
            GreciaIn += 1;
            bt3Grecia.value = 1;
            bt3Grecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt3Grecia.value == 1){
            bt3Grecia.value = 2;
            bt3Grecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt3Grecia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            GreciaOut +=1;
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt3Grecia.value = 0;
            bt3Grecia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 4 Grecia ---------------------------------------------------------------- 4
    bt4Grecia.addEventListener('click', function() {
        if(bt4Grecia.value == 0) {
            GreciaIn += 1;
            bt4Grecia.value = 1;
            bt4Grecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt4Grecia.value == 1){
            bt4Grecia.value = 2;
            bt4Grecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt4Grecia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            GreciaOut +=1;
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt4Grecia.value = 0;
            bt4Grecia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 

    //Cama 5 Grecia ---------------------------------------------------------------- 5
    bt5Grecia.addEventListener('click', function() {
        if(bt5Grecia.value == 0) {
            GreciaIn += 1;
            bt5Grecia.value = 1;
            bt5Grecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt5Grecia.value == 1){
            bt5Grecia.value = 2;
            bt5Grecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt5Grecia.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            GreciaOut +=1; 
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt5Grecia.value = 0;
            bt5Grecia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });     

    //Cama 6 Grecia ---------------------------------------------------------------- 6
    bt6Grecia.addEventListener('click', function() {
        if(bt6Grecia.value == 0) {
            GreciaIn += 1;
            bt6Grecia.value = 1;
            bt6Grecia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt6Grecia.value == 1){
            bt6Grecia.value = 2;
            bt6Grecia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt6Grecia.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            GreciaOut +=1; 
        } else {
            GreciaIn -= 1;
            GreciaOut -=1;
            bt6Grecia.value = 0;
            bt6Grecia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });      
});