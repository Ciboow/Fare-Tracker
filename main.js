function validateAccount(){
    uName = document.getElementById('logemail');
    pWord = document.getElementById('logpass');
    if(uName.value=="admin"&& pWord.value=="user"){
        location.assign('./admin.html');
    }
    else{
        window.alert('INCORRECT USERNAME OR PASSOWORD!');
    }
    
}