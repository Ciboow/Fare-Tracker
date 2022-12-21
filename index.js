//set variable keys for local storage
function setKeys(){

    if(localStorage.length == 0){
        localStorage.setItem('m-AveSpeed',"");
        localStorage.setItem('m-MinKmValue',"");
        localStorage.setItem('m-NValue',"");

        localStorage.setItem('t-AveSpeed',"");
        localStorage.setItem('t-MinKmValue',"");
        localStorage.setItem('t-NValue',"");
        localStorage.setItem('t-CostPerMin',"");

        localStorage.setItem('r-AveSpeed',"");
        localStorage.setItem('r-MinKmValue',"");
        localStorage.setItem('r-NValue',"");
        localStorage.setItem('r-CostPerMin',"");
    }
}

function setVariables(){

    mAveSpeed = document.getElementById('motorcycleAveSpeed');
    mMinKmValue = document.getElementById('motorcycleMinKmValue');
    mNValue = document.getElementById('motorcycleNValue');

    tAveSpeed = document.getElementById('tricycleAveSpeed');
    tMinKmValue = document.getElementById('tricycleMinKmValue');
    tNValue = document.getElementById('tricycleNValue');
    tCostPerMin = document.getElementById('tricycleCostPerMinute');

    rAveSpeed = document.getElementById('rickshawAveSpeed');
    rMinKmValue = document.getElementById('rickshawMinKmValue');
    rNValue = document.getElementById('rickshawNValue');
    rCostPerMin = document.getElementById('rickshawCostPerMinute');

    mAveSpeed = mAveSpeed.value;
    mMinKmValue = mMinKmValue.value;
    mNValue = mNValue.value;

    tAveSpeed = tAveSpeed.value;
    tMinKmValue = tMinKmValue.value;
    tNValue = tNValue.value;
    tCostPerMin = tCostPerMin.value;

    rAveSpeed = rAveSpeed.value;
    rMinKmValue = rMinKmValue.value;
    rNValue = rNValue.value;
    rCostPerMin = rCostPerMin.value;

    //store item to local storage
    localStorage.setItem('m-AveSpeed', mAveSpeed);
    localStorage.setItem('m-MinKmValue', mMinKmValue);
    localStorage.setItem('m-NValue', mNValue);

    localStorage.setItem('t-AveSpeed', tAveSpeed);
    localStorage.setItem('t-MinKmValue', tMinKmValue);
    localStorage.setItem('t-NValue', tNValue);
    localStorage.setItem('t-CostPerMin', tCostPerMin);

    localStorage.setItem('r-AveSpeed', rAveSpeed);
    localStorage.setItem('r-MinKmValue', rMinKmValue);
    localStorage.setItem('r-NValue', rNValue);
    localStorage.setItem('r-CostPerMin', rCostPerMin);
    
    window.alert('Values applied!');
}

function getMotorcycleVariables(){
    mAverageSpeed = localStorage.getItem('m-AveSpeed');
    mMinKmValue = localStorage.getItem('m-MinKmValue');
    mNValue = localStorage.getItem('m-NValue');
    //Motorcycle Default
    if(mAverageSpeed==""){
        mAverageSpeed = 30;
    }
    if(mMinKmValue==""){
        mMinKmValue =30;
    }
    if(mNValue==""){
        mNValue=4;
    }

}


//Set Default Value for Vehicle Variables
function setDefault(){
    mAveSpeed = 30;
    mMinKmValue =30;
    mNValue=4;

    tAveSpeed = 20;
    tMinKmValue = 20;
    tNValue=4;
    tCostPerMin=2;

    rAveSpeed = 25;
    rMinKmValue = 20;
    rNValue=4;
    rCostPerMin=2;

    localStorage.setItem('m-AveSpeed', mAveSpeed);
    localStorage.setItem('m-MinKmValue', mMinKmValue);
    localStorage.setItem('m-NValue', mNValue);

    localStorage.setItem('t-AveSpeed', tAveSpeed);
    localStorage.setItem('t-MinKmValue', tMinKmValue);
    localStorage.setItem('t-NValue', tNValue);
    localStorage.setItem('t-CostPerMin', tCostPerMin);

    localStorage.setItem('r-AveSpeed', rAveSpeed);
    localStorage.setItem('r-MinKmValue', rMinKmValue);
    localStorage.setItem('r-NValue', rNValue);
    localStorage.setItem('r-CostPerMin', rCostPerMin);

    window.alert('Default Values Applied!');
    
    loadSetValues();
}

function loadSetValues(){
    document.getElementById('motorcycleAveSpeed').value = localStorage.getItem('m-AveSpeed');
    document.getElementById('motorcycleMinKmValue').value = localStorage.getItem('m-MinKmValue');
    document.getElementById('motorcycleNValue').value = localStorage.getItem('m-NValue');

    document.getElementById('tricycleAveSpeed').value = localStorage.getItem('t-AveSpeed');
    document.getElementById('tricycleMinKmValue').value = localStorage.getItem('t-MinKmValue');
    document.getElementById('tricycleNValue').value = localStorage.getItem('t-NValue');
    document.getElementById('tricycleCostPerMinute').value = localStorage.getItem('t-CostPerMin');

    document.getElementById('rickshawAveSpeed').value = localStorage.getItem('r-AveSpeed');
    document.getElementById('rickshawMinKmValue').value = localStorage.getItem('r-MinKmValue');
    document.getElementById('rickshawNValue').value = localStorage.getItem('r-NValue');
    document.getElementById('rickshawCostPerMinute').value = localStorage.getItem('r-CostPerMin');

}
function getTricycleVariables(){
    tAverageSpeed = localStorage.getItem('t-AveSpeed');
    tMinKmValue = localStorage.getItem('t-MinKmValue');
    tNValue = localStorage.getItem('t-NValue');
    tCostPerMin = localStorage.getItem('t-CostPerMin');

    
    //Tricycle Default
    if(tAverageSpeed==""){
        tAverageSpeed = 20;
        
    }
    if(tMinKmValue==""){
        tMinKmValue = 20;
    }
    if(tNValue==""){
        tNValue=4;
    }
    if(tCostPerMin==""){
        tCostPerMin=2;
    }
    


}

function getRickshawVariables(){
    rAverageSpeed = localStorage.getItem('r-AveSpeed');
    rMinKmValue = localStorage.getItem('r-MinKmValue');
    rNValue = localStorage.getItem('r-NValue');
    rCostPerMin = localStorage.getItem('r-CostPerMin');

        //Auto-Rickshaw Default
        if(rAverageSpeed==""){
            rAverageSpeed = 25;
        }
        if(rMinKmValue==""){
            rMinKmValue = 20;
        }
        if(rNValue==""){
            rNValue=4;
        }
        if(rCostPerMin==""){
            rCostPerMin=2;
        }
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

    if(timeTraveled>59){
        min=parseInt(timeTraveled/60);
        if(min>60){
            hrs=parseInt(min/60);
        }
    }
}
//Get Distance for All
function getTricycleDistance(averageSpeed){
    //timeTraveled is in seconds and converting average speed to second
    distance = timeTraveled*((averageSpeed/60)/60);
    distance = distance.toFixed(4);
}

function getTotalFare(firstPhpPerKm,nValue){

    thisCodeName = codeName.textContent;
    thisFare= document.getElementById('farePerKm');

    distanceKm = distanceTraveled.textContent;
    fare=0;

    if(distanceKm>nValue){
        distanceDiff = distanceKm-nValue;
        fare= thisFare.value * distanceDiff;
    }

    totalFareCalculated = fare + parseFloat(firstPhpPerKm);
    
    if(thisCodeName =='TRICYCLE'){
        totalFareCalculated = totalFareCalculated + (min*tCostPerMin);
    }
    if(thisCodeName == 'AUTO-RICKSHAW'){
        totalFareCalculated = totalFareCalculated + (min*rCostPerMin);
    }
    
    totalFareCalculated = totalFareCalculated.toFixed(2);

}
