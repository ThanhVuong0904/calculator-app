const $$ = document.querySelectorAll.bind(document);
// var items = Array.from(document.querySelectorAll('.item'));
var items = $$('.item');
var output = document.querySelector('#output');


// from() method is used to creates a new array instance from a given array.
// In the case of a string, every alphabet of the string is converted to 
//an element of the new array instance and in case of integer values,
// a new array instance simply takes the elements of the given array.
items.forEach(function(btn) {
    btn.addEventListener('click', function(){
        if(btn.innerHTML == 'RESET') {
            output.value = '0'
        }
        else if (btn.innerHTML == 'DEL') {
            //delete 1 element at the end of the array
            var arrText = Array.from(output.value);
            arrText.splice(arrText.length-1,1)
            if(arrText.length != 0) 
                output.value = arrText.join('');
            else output.value = '0'
        }
        else if(btn.innerHTML == 'x'){
            output.value += '*';
        }
        else if(btn.innerHTML == '=') {
            output.value = eval(output.value);
        }
        else output.value += btn.innerHTML
    })
})
