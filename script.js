window.onload = function(){
    var seconds = 00;
    var miliseconds = 00;
    var OutputSeconds = document.getElementById("seconds");
    var OutputMiliseconds = document.getElementById("miliseconds");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonRestart = document.getElementById("btn-restart");
    var Interval;
    
    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // 10 refers to 10 miliseconds
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);                // clear interval once button is clicked 
    });

    buttonRestart.addEventListener('click', () => {
        clearInterval(Interval);                // when it is reset , the following is set 
        miliseconds = "00";
        seconds = "00";
        OutputSeconds.innerHTML = seconds;      // will return 00
        OutputMiliseconds.innerHTML = miliseconds; // will return 00
    });
    
    function startTimer() {
        miliseconds++; 
        if(miliseconds <= 9){       // if milliseconds are less than or equal to 9, add a 0 in front
            OutputMiliseconds.innerHTML = "0" + miliseconds; 
        }
        if(miliseconds > 9){        // if miliseconds value is greater than 9, return miliseconds 
            OutputMiliseconds.innerHTML = miliseconds;
        }
        if(miliseconds > 99){     // if miliseconds greater than 99, return 0 + seconds
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            miliseconds = 0;
            OutputMiliseconds.innerHTML = "0" + 0;
        }
        if(seconds > 9){           // if seconds are greater than 9
            OutputSeconds.innerHTML = seconds;
        }
    }
}