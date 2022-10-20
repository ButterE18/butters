function runTimer(x){ //This function runs on the countdown

    var currTime = 50;
    var Timeout = 5000;

   for(i=0;i<11;i++){
           
       IntervalIDs[i] = setTimeout(function(){
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
    var IntervalIDs = new Array();

function startbuttonclick(){
    document.getElementById("btnStart").disabled = true; //when start is pressed, start turns off
    document.getElementById("btnStop").disabled = false; //when start is pressed, stop turns on

runTimer(document.getElementById("FinalCountdown")); //This is the function that runs the timer function
}


function stopbuttonclick(){
    document.getElementById("btnStart").disabled = false; //INVERSE PROPERTY
    document.getElementById("btnStop").disabled = true; //INVERSE PROPERTY

    for(i=0; i<11; i++){
        clearTimeout(IntervalIDs[i]); //pause function 
    }
}

   function getInput() { 
   
   do{
       Firstname = prompt("GIVE ME FIRST NAME PWEASE:");
       Lastname = prompt("GIVE ME LAST NAME NOW PWEASE:");
   
       Fullname = Firstname + " " + Lastname; //This variable will be used to ensure that the combination of both names is under 1 variable
           if(Fullname.length > 20){
               alert("YOUR NAME IS TOO BIG, CHANGE IT PWEASE");
           }
   }
   while(Fullname.length > 20); //This is how we break away from the loop if the length exceeds 20 characters
   
   do{
       BadgeHashtag = prompt("TYPE IN SPECIALIZED NUMERO PWEASE:");
   
       if(BadgeHashtag > 1000){ //1000 ensures that the badge number is 3 numbers or less
           alert("ERROR DOES NOT COMPUTE LMAO");
       }
   }
   while(BadgeHashtag > 1000); //Just like line 38 but for the Badge number
   
   
   
   }
