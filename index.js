//Motorcycle Variables
function setVariables(){

    mAveSpeed = document.getElementById('motorcycleAveSpeed');
    mMinKmValue = document.getElementById('motorcycleMinKmValue');
    mNValue = document.getElementById('motorcycleNValue');

    tAveSpeed = document.getElementById('tricycleAveSpeed');
    tMinKmValue = document.getElementById('tricycleMinKmValue');
    tNValue = document.getElementById('tricycleNValue');

    rAveSpeed = document.getElementById('rickshawAveSpeed');
    rMinKmValue = document.getElementById('rickshawMinKmValue');
    rNValue = document.getElementById('rickshawNValue');

    mAveSpeed = mAveSpeed.value;
    mMinKmValue = mMinKmValue.value;
    mNValue = mNValue.value;

    tAveSpeed = tAveSpeed.value;
    tMinKmValue = tMinKmValue.value;
    tNValue = tNValue.value;
    
    rAveSpeed = rAveSpeed.value;
    rMinKmValue = rMinKmValue.value;
    rNValue = rNValue.value;

    localStorage.setItem('m-AveSpeed', mAveSpeed);
    localStorage.setItem('m-MinKmValue', mMinKmValue);
    localStorage.setItem('m-NValue', mNValue);

    localStorage.setItem('t-AveSpeed', tAveSpeed);
    localStorage.setItem('t-MinKmValue', tMinKmValue);
    localStorage.setItem('t-NValue', tNValue);

    localStorage.setItem('r-AveSpeed', rAveSpeed);
    localStorage.setItem('r-MinKmValue', rMinKmValue);
    localStorage.setItem('r-NValue', rNValue);
    
    window.alert('Values Applied!');
}

function getMotorcycleVariables(){
    mAverageSpeed = localStorage.getItem('m-AveSpeed');
    mMinKmValue = localStorage.getItem('m-MinKmValue');
    mNValue = localStorage.getItem('m-NValue');
}

function getTricycleVariables(){
    tAverageSpeed = localStorage.getItem('t-AveSpeed');
    tMinKmValue = localStorage.getItem('t-MinKmValue');
    tNValue = localStorage.getItem('t-NValue');
}

function getRickshawVariables(){
    rAverageSpeed = localStorage.getItem('r-AveSpeed');
    rMinKmValue = localStorage.getItem('r-MinKmValue');
    rNValue = localStorage.getItem('r-NValue');
}


function getTime(){
    var d = new Date();
    hours=d.getHours();
    minutes=d.getMinutes();
    seconds=d.getSeconds();
}

function getTotalTimeTraveled(){
    hms = timeStarted.textContent;   // your input string
    a = hms.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    secondsStart = parseInt((+a[0])) * 60 * 60 + parseInt((+a[1])) * 60 + parseInt((+a[2])); 

    hms_2 = timeEnded.textContent;
    b = hms_2.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    secondsEnd = parseInt((+b[0])) * 60 * 60 + parseInt((+b[1])) * 60 + parseInt((+b[2])); 
    
    timeTraveled = secondsEnd - secondsStart;
    hrs = 0;
    min = 0;
    secs = 0;

    secs=timeTraveled%60;

    if(timeTraveled>60){
        min=parseInt(timeTraveled/60);
        if(min>60){
            hrs=parseInt(min/60);
        }
    }
}

function getTricycleDistance(averageSpeed){
    distance = timeTraveled*averageSpeed;
    distance = distance.toFixed(4);
}

function getTotalFare(firstPhpPerKm,nValue){
    //convert distance from m to km
    thisFare= document.getElementById('farePerKm');
    
    distanceKm = distanceTraveled.textContent/1000;
    fare=0;

    if(distanceKm>nValue){
        distanceDiff = distanceKm-nValue;
        fare= thisFare.value * distanceDiff;
    }

    totalFareCalculated = fare + parseFloat(firstPhpPerKm);
    totalFareCalculated = totalFareCalculated.toFixed(2);

}
