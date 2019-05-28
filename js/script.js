document.addEventListener("DOMContentLoaded", function ready() {
/*choose radio button 1*/

function btn1() {
    document.getElementById("ethernet_button_radio_ip_choose").classList.add("button_radio_checked");
        let listInputs = document.getElementsByClassName("ip_choose_input"); 
        for(let i=0; i<listInputs.length; i++ ){
            listInputs[i].removeAttribute("disabled");
           };
           listInputs[0].setAttribute("required", "required");
           listInputs[1].setAttribute("required", "required");
           let listTextChoose = document.getElementsByClassName("ip_choose"); 
        for(let i=0; i<listTextChoose.length; i++ ){
            listTextChoose[i].classList.remove("button_radio_hide");
           };
    document.getElementById("ethernet_button_radio_ip_automatically").classList.remove("button_radio_checked");  
};

function btn2() {
    document.getElementById("ethernet_button_radio_ip_automatically").classList.add("button_radio_checked");
    document.getElementById("ethernet_button_radio_ip_choose").classList.remove("button_radio_checked");

    let listInputs = document.getElementsByClassName("ip_choose_input"); 
        for(let i=0; i<listInputs.length; i++ ){
            listInputs[i].setAttribute("disabled", "disabled");
            listInputs[i].value = '';
           };
           listInputs[0].removeAttribute("required");
           listInputs[1].removeAttribute("required");
           let listTextChoose = document.getElementsByClassName("ip_choose"); 
        for(let i=0; i<listTextChoose.length; i++ ){
            listTextChoose[i].classList.add("button_radio_hide");
           };
};

ethernet_button_radio_ip_choose.onclick = function () { btn1();};
ethernet_button_radio_ip_automatically.onclick = function () {btn2()};
/*choose radio button 2*/


function btn3() {
    document.getElementById("ethernet_button_radio_dns_choose").classList.add("button_radio_checked");
    
    let listInputs = document.getElementsByClassName("dns_choose_input"); 
    for(let i=0; i<listInputs.length; i++ ){
        listInputs[i].removeAttribute("disabled");
       };
       listInputs[0].setAttribute("required", "required");
       let listTextChoose = document.getElementsByClassName("dns_choose"); 
    for(let i=0; i<listTextChoose.length; i++ ){
        listTextChoose[i].classList.remove("button_radio_hide");
       };
document.getElementById("ethernet_button_radio_dns_automatically").classList.remove("button_radio_checked");   
   
};
function btn4() {
    document.getElementById("ethernet_button_radio_dns_automatically").classList.add("button_radio_checked");
    document.getElementById("ethernet_button_radio_dns_choose").classList.remove("button_radio_checked");

    let listInputs = document.getElementsByClassName("dns_choose_input"); 
        for(let i=0; i<listInputs.length; i++ ){
            listInputs[i].setAttribute("disabled", "disabled");
            listInputs[i].value = '';
           };
           listInputs[0].removeAttribute("required");
           let listTextChoose = document.getElementsByClassName("dns_choose"); 
        for(let i=0; i<listTextChoose.length; i++ ){
            listTextChoose[i].classList.add("button_radio_hide");
           };
}

ethernet_button_radio_dns_choose.onclick = function () {btn3()}
   
ethernet_button_radio_dns_automatically.onclick = function () {btn4()};

/*choose radio button 3*/

function btn5() {
    document.getElementById("wireless_button_radio_ip_choose").classList.add("button_radio_checked");
    
    let listInputs = document.getElementsByClassName("wireless_ip_choose_input"); 
    for(let i=0; i<listInputs.length; i++ ){
        listInputs[i].removeAttribute("disabled");
       };
       listInputs[0].setAttribute("required", "required");
           listInputs[1].setAttribute("required", "required");
       let listTextChoose = document.getElementsByClassName("wireless_ip_choose"); 
    for(let i=0; i<listTextChoose.length; i++ ){
        listTextChoose[i].classList.remove("button_radio_hide");
       };
document.getElementById("wireless_button_radio_ip_automatically").classList.remove("button_radio_checked"); 
}
    function btn6() {
        document.getElementById("wireless_button_radio_ip_automatically").classList.add("button_radio_checked");
        document.getElementById("wireless_button_radio_ip_choose").classList.remove("button_radio_checked");
    
        let listInputs = document.getElementsByClassName("wireless_ip_choose_input"); 
            for(let i=0; i<listInputs.length; i++ ){
                listInputs[i].setAttribute("disabled", "disabled");
                listInputs[i].value = '';
               };
               listInputs[0].removeAttribute("required");
               listInputs[1].removeAttribute("required");
               let listTextChoose = document.getElementsByClassName("wireless_ip_choose"); 
            for(let i=0; i<listTextChoose.length; i++ ){
                listTextChoose[i].classList.add("button_radio_hide");
    }
    };
wireless_button_radio_ip_choose.onclick = function () {btn5();};

wireless_button_radio_ip_automatically.onclick = function () {btn6() };
    


/*choose radio button 4*/
function btn7() {
    document.getElementById("wireless_button_radio_dns_choose").classList.add("button_radio_checked");
    
    let listInputs = document.getElementsByClassName("wireless_dns_choose_input"); 
    for(let i=0; i<listInputs.length; i++ ){
        listInputs[i].removeAttribute("disabled");
       };
       listInputs[0].setAttribute("required", "required");
       let listTextChoose = document.getElementsByClassName("wireless_dns_choose"); 
    for(let i=0; i<listTextChoose.length; i++ ){
        listTextChoose[i].classList.remove("button_radio_hide");
       };
document.getElementById("wireless_button_radio_dns_automatically").classList.remove("button_radio_checked");
};
function btn8() {
    document.getElementById("wireless_button_radio_dns_automatically").classList.add("button_radio_checked");
    document.getElementById("wireless_button_radio_dns_choose").classList.remove("button_radio_checked");

    let listInputs = document.getElementsByClassName("wireless_dns_choose_input"); 
        for(let i=0; i<listInputs.length; i++ ){
            listInputs[i].setAttribute("disabled", "disabled");
            listInputs[i].value = '';
           };
           listInputs[0].removeAttribute("required");
           let listTextChoose = document.getElementsByClassName("wireless_dns_choose"); 
        for(let i=0; i<listTextChoose.length; i++ ){
            listTextChoose[i].classList.add("button_radio_hide");
           };
}



wireless_button_radio_dns_choose.onclick = function () {btn7()};

wireless_button_radio_dns_automatically.onclick = function () {btn8()};




/*checkbox*/
function checkbox1(){
    let attr = enable_wifi.getAttribute('checked');
    if(attr){
        enable_wifi.removeAttribute('checked'); 
        wireless_network_name_label.classList.add("button_radio_hide");
        wireless_network_name.setAttribute("disabled", "disabled");
        reset_wifi.setAttribute("disabled", "disabled");
        reset_wifi.classList.remove("reset_wifi_able");
    }else{
        enable_wifi.setAttribute('checked','checked');
        wireless_network_name_label.classList.remove("button_radio_hide");
        wireless_network_name.removeAttribute('disabled'); 
        reset_wifi.removeAttribute('disabled');
        reset_wifi.classList.add("reset_wifi_able");
    };
  
} 


enable_wifi.onclick = function(){
    checkbox1();
};


function checkbox2(){
    let attr = enable_wireless_security.getAttribute('checked');
    if(attr){
        enable_wireless_security.removeAttribute('checked'); 
        security_key_label.classList.add("button_radio_hide");
        security_key.setAttribute("disabled", "disabled");
        security_key.value='';
    }else{
        enable_wireless_security.setAttribute('checked','checked');
        security_key_label.classList.remove("button_radio_hide");
        security_key.removeAttribute('disabled'); 
    };
  
} 


enable_wireless_security.onclick = function(){
    checkbox2();
};
////////////////localStorage//////////////


button_checked.onclick = function () {
let save ={};
save.ethernet_button_radio_ip_automatically = ethernet_button_radio_ip_automatically.classList[1];
save.ethernet_button_radio_ip_choose = ethernet_button_radio_ip_choose.classList[1];
save.ethernet_ip_adress = document.getElementById("ethernet_ip_adress").value;
save.ethernet_subnet_mask = document.getElementById("ethernet_subnet_mask").value;
save.ethernet_default_gateway = document.getElementById("ethernet_default_gateway").value;
save.ethernet_button_radio_dns_automatically = ethernet_button_radio_dns_automatically.classList[1];
save.ethernet_button_radio_dns_choose = ethernet_button_radio_dns_choose.classList[1];
save.ethernet_preferred_dns = document.getElementById("ethernet_preferred_dns").value;
save.ethernet_alternative_dns = document.getElementById("ethernet_alternative_dns").value;

save.wireless_button_radio_ip_automatically = wireless_button_radio_ip_automatically.classList[1];
save.wireless_button_radio_ip_choose = wireless_button_radio_ip_choose.classList[1];
save.wireless_ip_adress = document.getElementById("wireless_ip_adress").value;
save.wireless_subnet_mask = document.getElementById("wireless_subnet_mask").value;
save.wireless_default_gateway = document.getElementById("wireless_default_gateway").value;
save.wireless_button_radio_dns_automatically = wireless_button_radio_dns_automatically.classList[1];
save.wireless_button_radio_dns_choose = wireless_button_radio_dns_choose.classList[1];
save.wireless_preferred_dns = document.getElementById("wireless_preferred_dns").value;
save.wireless_alternative_dns = document.getElementById("wireless_alternative_dns").value;

save.wireless_network_name = document.getElementById("wireless_network_name").value;
save.security_key = document.getElementById("security_key").value;
   var sItem = JSON.stringify(save);
    localStorage.setItem("save",sItem);
    
};

cancel.onclick = function () {
localStorage.clear();
  btn2();
  btn4();
  btn6();
  btn8();
  enable_wifi.removeAttribute('checked'); 
        wireless_network_name_label.classList.add("button_radio_hide");
        wireless_network_name.setAttribute("disabled", "disabled");
        reset_wifi.setAttribute("disabled", "disabled");
        reset_wifi.classList.remove("reset_wifi_able");
  
document.getElementById("wireless_network_name").value = '';
enable_wireless_security.removeAttribute('checked'); 
security_key_label.classList.add("button_radio_hide");
security_key.setAttribute("disabled", "disabled");
security_key.value='';
};


var showLocalStorage = JSON.parse(localStorage.getItem('save') );

/*fill from localStorage*/
if(localStorage.getItem('save')){
    /* radio button 1*/
ethernet_ip_adress.value = showLocalStorage.ethernet_ip_adress;
ethernet_subnet_mask.value = showLocalStorage.ethernet_subnet_mask;
ethernet_default_gateway.value = showLocalStorage.ethernet_default_gateway;
if(ethernet_ip_adress.value){
    ethernet_button_radio_ip_choose.classList.add("button_radio_checked");
    ethernet_button_radio_ip_automatically.classList.remove("button_radio_checked");
    ethernet_ip_adress.removeAttribute("disabled");
ethernet_subnet_mask.removeAttribute("disabled");
ethernet_default_gateway.removeAttribute("disabled");
document.getElementsByClassName("ip_choose")[0].classList.remove("button_radio_hide");
document.getElementsByClassName("ip_choose")[1].classList.remove("button_radio_hide");
document.getElementsByClassName("ip_choose")[2].classList.remove("button_radio_hide");
}
/* radio button 2*/

ethernet_preferred_dns.value = showLocalStorage.ethernet_preferred_dns;
ethernet_alternative_dns.value = showLocalStorage.ethernet_alternative_dns;
if(ethernet_preferred_dns.value){
    ethernet_button_radio_dns_choose.classList.add("button_radio_checked");
    ethernet_button_radio_dns_automatically.classList.remove("button_radio_checked");
    ethernet_preferred_dns.removeAttribute("disabled");
    ethernet_alternative_dns.removeAttribute("disabled");
    document.getElementsByClassName("dns_choose")[0].classList.remove("button_radio_hide");
    document.getElementsByClassName("dns_choose")[1].classList.remove("button_radio_hide");
}

   /* radio button 3*/
  wireless_ip_adress.value = showLocalStorage.wireless_ip_adress;
   wireless_subnet_mask.value = showLocalStorage.wireless_subnet_mask;
   wireless_default_gateway.value = showLocalStorage.wireless_default_gateway;
   if(wireless_ip_adress.value){
       wireless_button_radio_ip_choose.classList.add("button_radio_checked");
       wireless_button_radio_ip_automatically.classList.remove("button_radio_checked");
       wireless_ip_adress.removeAttribute("disabled");
   wireless_subnet_mask.removeAttribute("disabled");
   wireless_default_gateway.removeAttribute("disabled");
   document.getElementsByClassName("wireless_ip_choose")[0].classList.remove("button_radio_hide");
   document.getElementsByClassName("wireless_ip_choose")[1].classList.remove("button_radio_hide");
   document.getElementsByClassName("wireless_ip_choose")[2].classList.remove("button_radio_hide");
   }


   /* radio button 4*/
  
   wireless_preferred_dns.value = showLocalStorage.wireless_preferred_dns;
   wireless_alternative_dns.value = showLocalStorage.wireless_alternative_dns;
   if(wireless_preferred_dns.value){
       wireless_button_radio_dns_choose.classList.add("button_radio_checked");
       wireless_button_radio_dns_automatically.classList.remove("button_radio_checked");
       wireless_preferred_dns.removeAttribute("disabled");
       wireless_alternative_dns.removeAttribute("disabled");
       document.getElementsByClassName("wireless_dns_choose")[0].classList.remove("button_radio_hide");
       document.getElementsByClassName("wireless_dns_choose")[1].classList.remove("button_radio_hide");
   }


security_key.value = showLocalStorage.security_key;

if(security_key.value){
    enable_wireless_security.classList.add("button_radio_checked");
    enable_wireless_security.setAttribute("checked", "checked");
       security_key.removeAttribute("disabled");
       security_key_label.classList.remove("button_radio_hide");
};


};  


});