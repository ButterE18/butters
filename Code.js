function runTimer(x){ //This function runs on the countdown

 var currTime = 50;
 var Timeout = 5000;
    
for(i=0;i<11;i++){
        
    setTimeout(function(){    
        if(currTime == 25){
        alert("HALFWAY THERE");

        x.innerHTML = currTime
        currTime = currTime - 5;
    },Timeout);

    Timeout = Timeout + 1000;
    }
}    
