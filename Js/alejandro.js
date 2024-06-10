document.addEventListener('DOMContentLoaded', function() {
    AlejandroIn = 2;
    AlejandroOut = 0;


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

    //Cama 1 Alejandro ---------------------------------------------------------------- 1
    bt1Alejandro.addEventListener('click', function() {
        if(bt1Alejandro.value == 0) {
            AlejandroIn += 1;
            bt1Alejandro.value = 1;
            bt1Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt1Alejandro.value == 1){
            bt1Alejandro.value = 2;
            bt1Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt1Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');  
            AlejandroOut +=1;
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt1Alejandro.value = 0;
            bt1Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');           
        }
    });  

    //Cama 2 Alejandro ---------------------------------------------------------------- 2
    bt2Alejandro.addEventListener('click', function() {
        if(bt2Alejandro.value == 0) {
            AlejandroIn += 1;
            bt2Alejandro.value = 1;
            bt2Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt2Alejandro.value == 1){
            bt2Alejandro.value = 2;
            bt2Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt2Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');
            AlejandroOut +=1;
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt2Alejandro.value = 0;
            bt2Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
        console.log(AlejandroOut)
    });    

    //Cama 3 Alejandro ---------------------------------------------------------------- 3
    bt3Alejandro.addEventListener('click', function() {
        if(bt3Alejandro.value == 0) {
            AlejandroIn += 1;
            bt3Alejandro.value = 1;
            bt3Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt3Alejandro.value == 1){
            bt3Alejandro.value = 2;
            bt3Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt3Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');  
            AlejandroOut +=1;
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt3Alejandro.value = 0;
            bt3Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 4 Alejandro ---------------------------------------------------------------- 4
    bt4Alejandro.addEventListener('click', function() {
        if(bt4Alejandro.value == 0) {
            AlejandroIn += 1;
            bt4Alejandro.value = 1;
            bt4Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt4Alejandro.value == 1){
            bt4Alejandro.value = 2;
            bt4Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt4Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');  
            AlejandroOut +=1;
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt4Alejandro.value = 0;
            bt4Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 

    //Cama 5 Alejandro ---------------------------------------------------------------- 5
    bt5Alejandro.addEventListener('click', function() {
        if(bt5Alejandro.value == 0) {
            AlejandroIn += 1;
            bt5Alejandro.value = 1;
            bt5Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt5Alejandro.value == 1){
            bt5Alejandro.value = 2;
            bt5Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt5Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            AlejandroOut +=1; 
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt5Alejandro.value = 0;
            bt5Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });     

    //Cama 6 Alejandro ---------------------------------------------------------------- 6
    bt6Alejandro.addEventListener('click', function() {
        if(bt6Alejandro.value == 0) {
            AlejandroIn += 1;
            bt6Alejandro.value = 1;
            bt6Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt6Alejandro.value == 1){
            bt6Alejandro.value = 2;
            bt6Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt6Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            AlejandroOut +=1; 
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt6Alejandro.value = 0;
            bt6Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 7 Alejandro ---------------------------------------------------------------- 7
    bt7Alejandro.addEventListener('click', function() {
        if(bt7Alejandro.value == 0) {
            AlejandroIn += 1;
            bt7Alejandro.value = 1;
            bt7Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt7Alejandro.value == 1){
            bt7Alejandro.value = 2;
            bt7Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt7Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');  
            AlejandroOut +=1;
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt7Alejandro.value = 0;
            bt7Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 8 Alejandro ---------------------------------------------------------------- 8
    bt8Alejandro.addEventListener('click', function() {
        if(bt8Alejandro.value == 0) {
            AlejandroIn += 1;
            bt8Alejandro.value = 1;
            bt8Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt8Alejandro.value == 1){
            bt8Alejandro.value = 2;
            bt8Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt8Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            AlejandroOut +=1; 
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt8Alejandro.value = 0;
            bt8Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 

    //Cama 9 Alejandro ---------------------------------------------------------------- 9
    bt9Alejandro.addEventListener('click', function() {
        if(bt9Alejandro.value == 0) {
            AlejandroIn += 1;
            bt9Alejandro.value = 1;
            bt9Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt9Alejandro.value == 1){
            bt9Alejandro.value = 2;
            bt9Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt9Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');  
            AlejandroOut +=1;
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt9Alejandro.value = 0;
            bt9Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });   
    
    //Cama 10 Alejandro ---------------------------------------------------------------- 10
    bt10Alejandro.addEventListener('click', function() {
        if(bt10Alejandro.value == 0) {
            AlejandroIn += 1;
            bt10Alejandro.value = 1;
            bt10Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt10Alejandro.value == 1){
            bt10Alejandro.value = 2;
            bt10Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt10Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');
            AlejandroOut +=1;  
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt10Alejandro.value = 0;
            bt10Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });      

    //Cama 11 Alejandro ---------------------------------------------------------------- 11
    bt11Alejandro.addEventListener('click', function() {
        if(bt11Alejandro.value == 0) {
            AlejandroIn += 1;
            bt11Alejandro.value = 1;
            bt11Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt11Alejandro.value == 1){
            bt11Alejandro.value = 2;
            bt11Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt11Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');
            AlejandroOut +=1;  
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt11Alejandro.value = 0;
            bt11Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 12 Alejandro ---------------------------------------------------------------- 12
    bt12Alejandro.addEventListener('click', function() {
        if(bt12Alejandro.value == 0) {
            AlejandroIn += 1;
            bt12Alejandro.value = 1;
            bt12Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt12Alejandro.value == 1){
            bt12Alejandro.value = 2;
            bt12Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt12Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder');  
            AlejandroOut +=1;
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt12Alejandro.value = 0;
            bt12Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });  
    
    //Cama 13 Alejandro ---------------------------------------------------------------- 12
    bt13Alejandro.addEventListener('click', function() {
        if(bt13Alejandro.value == 0) {
            AlejandroIn += 1;
            bt13Alejandro.value = 1;
            bt13Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt13Alejandro.value == 1){
            bt13Alejandro.value = 2;
            bt13Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt13Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            AlejandroOut +=1; 
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt13Alejandro.value = 0;
            bt13Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    }); 
    
    //Cama 14 Alejandro ---------------------------------------------------------------- 12
    bt14Alejandro.addEventListener('click', function() {
        if(bt14Alejandro.value == 0) {
            AlejandroIn += 1;
            bt14Alejandro.value = 1;
            bt14Alejandro.classList.add('bg-in', 'text-white', 'border-inBorder');
        } else if(bt14Alejandro.value == 1){
            bt14Alejandro.value = 2;
            bt14Alejandro.classList.remove('bg-in', 'text-white', 'border-inBorder');
            bt14Alejandro.classList.add('bg-out', 'text-white', 'border-inBorder'); 
            AlejandroOut +=1; 
        } else {
            AlejandroIn -= 1;
            AlejandroOut -=1;
            bt14Alejandro.value = 0;
            bt14Alejandro.classList.remove('bg-out', 'text-white', 'border-inBorder');             
        }
    });    
});
