window.addEventListener('DOMContentLoaded', function() {
    let receive1Btn = document.querySelector('#btnMd'),
        receive2Btn = document.querySelector('#btnMd'),
        receive3Btn = document.querySelector('#btnMd'),
        receive4Btn = document.querySelector('#btnMd');

    receive1Btn.addEventListener('click',function() {
        console.log(receive__1.value);
     });
    receive2Btn.addEventListener('click',function() {
        console.log(receive__2.value);
     });
    receive3Btn.addEventListener('click',function() {
        console.log(receive__3.value);
     });
    receive4Btn.addEventListener('click',function() {
        console.log(receive__4.value);
     });
});