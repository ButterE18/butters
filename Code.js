function runTimer(x){ //This function runs on the countdown

 var currTime = 50;
 var Timeout = 5000;
    
for(i=0;i<11;i++){
        
    setTimeout(function(){
        if(currTime == 0){
        x.innerHTML = currTime  
        alert("SIKE still no cookies for you lmao"); //this alert shows once the timer hits 0

        }    
        else if(currTime < 25){
            x.innerHTML = "Warning Less than half way to launch, time left = "  + currTime //this displays a message that appears when timer is less than 25
        }
        else{
            x.innerHTML = currTime
        }
        currTime = currTime - 5;
    },Timeout);
        
    Timeout = Timeout + 1000;
    }
}    

function getInput() {

do{
    Firstname = prompt("GIVE ME FIRST NAME PWEASE:");
    Lastname = prompt("GIVE ME LAST NAME NOW PWEASE:");

    Fullname = Firstname + " " + Lastname; 
        if(Fullname.length > 20){
            alert("YOUR NAME IS TOO BIG, CHANGE IT PWEASE");
        }
}
while(Fullname.length > 20);

do{
    BadgeHashtag = prompt("TYPE IN SPECIALIZED NUMERO PWEASE:");

    if(BadgeHashtag > 1000){
        alert("ERROR DOES NOT COMPUTE LMAO");
    }
}
while(BadgeHashtag > 1000);



}
