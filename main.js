function validateAccount(){
    uName = document.getElementById('logemail');
    pWord = document.getElementById('logpass');
    if(uName.value=="admin"&& pWord.value=="user"){
        location.assign('./admin.html');
    }
}