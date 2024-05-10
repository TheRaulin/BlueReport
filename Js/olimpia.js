document.addEventListener('DOMContentLoaded', function() {
    OlimpiaIn = 0;
    OlimpiaOut = 0;


    const bt1Olimpia = document.getElementById("bt1Olimpia");
    const bt2Olimpia = document.getElementById("bt2Olimpia");
    const bt3Olimpia = document.getElementById("bt3Olimpia");
    const bt4Olimpia = document.getElementById("bt4Olimpia");
    const bt5Olimpia = document.getElementById("bt5Olimpia");
    const bt6Olimpia = document.getElementById("bt6Olimpia");

    //Cama 1 Olimpia ---------------------------------------------------------------- 1
    bt1Olimpia.addEventListener('click', function() {
        if(bt1Olimpia.value == 0) {
            OlimpiaIn += 1;
            bt1Olimpia.value = 1;
            bt1Olimpia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt1Olimpia.value == 1){
            bt1Olimpia.value = 2;
            bt1Olimpia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt1Olimpia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            OlimpiaOut +=1;
        } else {
            OlimpiaIn -= 1;
            OlimpiaOut -=1;
            bt1Olimpia.value = 0;
            bt1Olimpia.classList.remove('bg-out', 'text-white', 'border-inBorder');           
        }
    });  

    //Cama 2 Olimpia ---------------------------------------------------------------- 2
    bt2Olimpia.addEventListener('click', function() {
        if(bt2Olimpia.value == 0) {
            OlimpiaIn += 1;
            bt2Olimpia.value = 1;
            bt2Olimpia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt2Olimpia.value == 1){
            bt2Olimpia.value = 2;
            bt2Olimpia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt2Olimpia.classList.add('bg-out', 'text-white', 'border-inBorder');
            OlimpiaOut +=1;
        } else {
            OlimpiaIn -= 1;
            OlimpiaOut -=1;
            bt2Olimpia.value = 0;
            bt2Olimpia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
        console.log(OlimpiaOut)
    });    

    //Cama 3 Olimpia ---------------------------------------------------------------- 3
    bt3Olimpia.addEventListener('click', function() {
        if(bt3Olimpia.value == 0) {
            OlimpiaIn += 1;
            bt3Olimpia.value = 1;
            bt3Olimpia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt3Olimpia.value == 1){
            bt3Olimpia.value = 2;
            bt3Olimpia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt3Olimpia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            OlimpiaOut +=1;
        } else {
            OlimpiaIn -= 1;
            OlimpiaOut -=1;
            bt3Olimpia.value = 0;
            bt3Olimpia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 4 Olimpia ---------------------------------------------------------------- 4
    bt4Olimpia.addEventListener('click', function() {
        if(bt4Olimpia.value == 0) {
            OlimpiaIn += 1;
            bt4Olimpia.value = 1;
            bt4Olimpia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt4Olimpia.value == 1){
            bt4Olimpia.value = 2;
            bt4Olimpia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt4Olimpia.classList.add('bg-out', 'text-white', 'border-inBorder');  
            OlimpiaOut +=1;
        } else {
            OlimpiaIn -= 1;
            OlimpiaOut -=1;
            bt4Olimpia.value = 0;
            bt4Olimpia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 

    //Cama 5 Olimpia ---------------------------------------------------------------- 5
    bt5Olimpia.addEventListener('click', function() {
        if(bt5Olimpia.value == 0) {
            OlimpiaIn += 1;
            bt5Olimpia.value = 1;
            bt5Olimpia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt5Olimpia.value == 1){
            bt5Olimpia.value = 2;
            bt5Olimpia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt5Olimpia.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            OlimpiaOut +=1; 
        } else {
            OlimpiaIn -= 1;
            OlimpiaOut -=1;
            bt5Olimpia.value = 0;
            bt5Olimpia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });     

    //Cama 6 Olimpia ---------------------------------------------------------------- 6
    bt6Olimpia.addEventListener('click', function() {
        if(bt6Olimpia.value == 0) {
            OlimpiaIn += 1;
            bt6Olimpia.value = 1;
            bt6Olimpia.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt6Olimpia.value == 1){
            bt6Olimpia.value = 2;
            bt6Olimpia.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt6Olimpia.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            OlimpiaOut +=1; 
        } else {
            OlimpiaIn -= 1;
            OlimpiaOut -=1;
            bt6Olimpia.value = 0;
            bt6Olimpia.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });      
});