/*const { json } = require("stream/consumers");*/

let img_slider = document.getElementsByClassName('img_slider');
//console.log(img_slider);
let etape = 0;
let nbr_img = img_slider.length;
let precedant = document.querySelector('.precedant')
let suivant = document.querySelector('.suivant')
//console.log(nbr_img);
function Active() {
    for (let i = 0; i < img_slider.length; i++) {
        img_slider[i].classList.remove('active');
    }
}
suivant.addEventListener('click', function () {
    etape++;
    if (etape >= nbr_img) {
        etape = 0;
    }
    Active();
    img_slider[etape].classList.add('active')
})
precedant.addEventListener('click', function () {
    etape--;
    if (etape < 0) {
        etape = nbr_img - 1;
    }
    Active();
    img_slider[etape].classList.add('active');
})
setInterval(function () {
    etape++;
    if (etape >= nbr_img) {
        etape = 0;
    }
    Active();
    img_slider[etape].classList.add('active')

}, 3000);
'use strict';

jQuery.noConflict();
jQuery(document).ready(function ($) {

    // usage: 2
    $('#myForm').formToJson('.result-json-output');

});
/*json*/
function submitData() {
    let nom = $('#nom').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    let msg = $('#msg').val();

    jsonObject = {
        "Nom": "",
        "Phone":"",
        "Email": "",
        "Message": ""
    }
    jsonObject.Nom = nom;
    jsonObject.Phone = phone;
    jsonObject.Email = email;
    jsonObject.Message = msg;

    let str = JSON.stringify(jsonObject);
    document.getElementById('showData').innerHTML = str;

}
//footer
// if(window.matchMedia && window.matchMedia('(prefers-color-sheme:dark)').matches){
//     alert('je suis en Dark mode !!')
// }
// const btnMode =document.querySelector('.btn-toggle');
// btnMode.addEventListener('click',()=>{
//     const body = document.body;

//     if(body.classList.contains('dark')){
//         body.classList.add('light')
//         body.classList.remove('dark')
//         btnMode.innerHTML = "Go Dark"

//     }else if(body.classList.contains('light')){
//         body.classList.add('dark')
//         body.classList.remove('light')
//         btnMode.innerHTML = "Go Light"
//     }


// })
// const toggle = document.getElementById("toggledark");
// const body = document.querySelector("body");

// toggle.addEventListener("click", function(){
//     this.classList.toggle("bi-moon");
//     if(this.classList.toggle("bi-brightness-high-fill")){
//         body.style.background="white";
//         body.style.color="black";
//         body.style.transition= "2s";
//         document.getElementById('Json').style.borderColor="black"
//     }
//     else{
//         body.style.background="black"
//         body.style.color="white";
//         body.style.transition= "2s";
//         document.getElementById('Json').style.borderColor="white"
        
//     }
// })
function darkmode(){
    let setTheme = document.body;
    setTheme.classList.toggle("dark-mode");

}

