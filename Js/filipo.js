document.addEventListener('DOMContentLoaded', function() {
    let FilipoIn = 0;

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

    //Cama 1 Filipo ---------------------------------------------------------------- 1
    bt1Filipo.addEventListener('click', function() {
        if(bt1Filipo.value == 0) {
            FilipoIn += 1;
            bt1Filipo.value = 1;
            console.log(bt1Filipo.value)
            bt1Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt1Filipo.value == 1){
            bt1Filipo.value = 2;
            bt1Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt1Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
            console.log(bt1Filipo.value)
        } else {
            FilipoIn -= 1;
            bt1Filipo.value = 0;
            bt1Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');   
            console.log(bt1Filipo.value)           
        }
    });  

    //Cama 2 Filipo ---------------------------------------------------------------- 2
    bt2Filipo.addEventListener('click', function() {
        if(bt2Filipo.value == 0) {
            FilipoIn += 1;
            bt2Filipo.value = 1;
            bt2Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt2Filipo.value == 1){
            bt2Filipo.value = 2;
            bt2Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt2Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt2Filipo.value = 0;
            bt2Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });    

    //Cama 3 Filipo ---------------------------------------------------------------- 3
    bt3Filipo.addEventListener('click', function() {
        if(bt3Filipo.value == 0) {
            FilipoIn += 1;
            bt3Filipo.value = 1;
            bt3Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt3Filipo.value == 1){
            bt3Filipo.value = 2;
            bt3Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt3Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt3Filipo.value = 0;
            bt3Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 4 Filipo ---------------------------------------------------------------- 4
    bt4Filipo.addEventListener('click', function() {
        if(bt4Filipo.value == 0) {
            FilipoIn += 1;
            bt4Filipo.value = 1;
            bt4Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt4Filipo.value == 1){
            bt4Filipo.value = 2;
            bt4Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt4Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt4Filipo.value = 0;
            bt4Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 

    //Cama 5 Filipo ---------------------------------------------------------------- 5
    bt5Filipo.addEventListener('click', function() {
        if(bt5Filipo.value == 0) {
            FilipoIn += 1;
            bt5Filipo.value = 1;
            bt5Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt5Filipo.value == 1){
            bt5Filipo.value = 2;
            bt5Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt5Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt5Filipo.value = 0;
            bt5Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });     

    //Cama 6 Filipo ---------------------------------------------------------------- 6
    bt6Filipo.addEventListener('click', function() {
        if(bt6Filipo.value == 0) {
            FilipoIn += 1;
            bt6Filipo.value = 1;
            bt6Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt6Filipo.value == 1){
            bt6Filipo.value = 2;
            bt6Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt6Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt6Filipo.value = 0;
            bt6Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 7 Filipo ---------------------------------------------------------------- 7
    bt7Filipo.addEventListener('click', function() {
        if(bt7Filipo.value == 0) {
            FilipoIn += 1;
            bt7Filipo.value = 1;
            bt7Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt7Filipo.value == 1){
            bt7Filipo.value = 2;
            bt7Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt7Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt7Filipo.value = 0;
            bt7Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 8 Filipo ---------------------------------------------------------------- 8
    bt8Filipo.addEventListener('click', function() {
        if(bt8Filipo.value == 0) {
            FilipoIn += 1;
            bt8Filipo.value = 1;
            bt8Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt8Filipo.value == 1){
            bt8Filipo.value = 2;
            bt8Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt8Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt8Filipo.value = 0;
            bt8Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 

    //Cama 9 Filipo ---------------------------------------------------------------- 9
    bt9Filipo.addEventListener('click', function() {
        if(bt9Filipo.value == 0) {
            FilipoIn += 1;
            bt9Filipo.value = 1;
            bt9Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt9Filipo.value == 1){
            bt9Filipo.value = 2;
            bt9Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt9Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt9Filipo.value = 0;
            bt9Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });   
    
    //Cama 10 Filipo ---------------------------------------------------------------- 10
    bt10Filipo.addEventListener('click', function() {
        if(bt10Filipo.value == 0) {
            FilipoIn += 1;
            bt10Filipo.value = 1;
            bt10Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt10Filipo.value == 1){
            bt10Filipo.value = 2;
            bt10Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt10Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt10Filipo.value = 0;
            bt10Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });      

    //Cama 11 Filipo ---------------------------------------------------------------- 11
    bt11Filipo.addEventListener('click', function() {
        if(bt11Filipo.value == 0) {
            FilipoIn += 1;
            bt11Filipo.value = 1;
            bt11Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt11Filipo.value == 1){
            bt11Filipo.value = 2;
            bt11Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt11Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt11Filipo.value = 0;
            bt11Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 12 Filipo ---------------------------------------------------------------- 12
    bt12Filipo.addEventListener('click', function() {
        if(bt12Filipo.value == 0) {
            FilipoIn += 1;
            bt12Filipo.value = 1;
            bt12Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt12Filipo.value == 1){
            bt12Filipo.value = 2;
            bt12Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt12Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt12Filipo.value = 0;
            bt12Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 13 Filipo ---------------------------------------------------------------- 12
    bt13Filipo.addEventListener('click', function() {
        if(bt13Filipo.value == 0) {
            FilipoIn += 1;
            bt13Filipo.value = 1;
            bt13Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt13Filipo.value == 1){
            bt13Filipo.value = 2;
            bt13Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt13Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt13Filipo.value = 0;
            bt13Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 
    
    //Cama 14 Filipo ---------------------------------------------------------------- 12
    bt14Filipo.addEventListener('click', function() {
        if(bt14Filipo.value == 0) {
            FilipoIn += 1;
            bt14Filipo.value = 1;
            bt14Filipo.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt14Filipo.value == 1){
            bt14Filipo.value = 2;
            bt14Filipo.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt14Filipo.classList.add('bg-out', 'text-white', 'border-inBorder');  
        } else {
            FilipoIn -= 1;
            bt14Filipo.value = 0;
            bt14Filipo.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });    
});