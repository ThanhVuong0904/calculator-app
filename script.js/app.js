//var one=document.getElementById('1');
		
// one.addEventListener('click', function(){
//     var toggle = document.querySelector('.circle');
//     toggle.style.left = '0px';
//     var body = document.querySelector('body');
//     body.classList.remove('active1');
//     body.classList.remove('active2')
    
// })

// var two=document.getElementById('2');
		
// two.addEventListener('click', function(){
//     var toggle = document.querySelector('.circle');
//     toggle.style.left = '17px';
//     var body = document.querySelector('body')
//     body.classList.add('active1');
//     body.classList.remove('active2')
// })

// var three=document.getElementById('3');
		
// three.addEventListener('click', function(){
//     var toggle = document.querySelector('.circle');
//     toggle.style.left = '34px';
//     var body = document.querySelector('body')
//     body.classList.add('active2');
//     body.classList.remove('active1')
// })

// three.addEventListener('dblclick', function(){
//     var toggle = document.querySelector('.circle');
//     toggle.style.left = '0px';
// })

var theme = 1;
const themeToggle = document.querySelector('.num');
var body = document.querySelector('body')
var toggle = document.querySelector('.circle');
console.log(themeToggle)
themeToggle.addEventListener('click', function(){
    theme++;
    switch(theme){
        case 2:
            body.classList.add('active1');
            toggle.style.left = '17px';
            break;
        case 3:
            body.classList.remove('active1');
            body.classList.add('active2');
            toggle.style.left = '34px';
            break;
        case 4:
            theme = 1;
            body.classList.remove('active2');
            toggle.style.left = '0'
            break;
    }
})