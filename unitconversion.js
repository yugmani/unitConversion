let sec = 0;

//function to convert mintues into seconds;
function minSeconds(minutes){
    sec= minutes * 60;
    return sec;
}

let conversion = document.getElementById("conversion");

//Eventlistener is initialized
conversion.addEventListener("submit", function(event){
    event.preventDefault();
    
    // Get the value of minutes that user enetered
    let minutes = document.getElementById("minutes").value;

    // Call the function and store into sec variable;
    sec = minSeconds(minutes);

    let result = document.getElementById("result");
    console.log("minutes: "+minutes)
    console.log("Seconds:"+ sec);

    //display result in html element with id "result";
    result.innerHTML = `<h3>${minutes} minutes has ${sec} seconds</h3>`;
}, false);