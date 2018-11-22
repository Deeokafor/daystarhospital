/*window.onload = function(){
    var change = document.getElementByTagName('<a>');
    change.addEventListener(click, function(){
        var content = document.getElementsByTagName('a');
        if(content.textNode == "intern"){
        document.getElementsById('headingchange').innerHTML = "hello intern, lets get to know you";
    }
})
}*/

//loop through array to display welcome text in different langauges to user
//attempt 1 using a for loop
/*
function changeLang(){
    var change = document.getElementById('lang');
    var lang = ['welcome', 'bienvenue', 'como estas', 'Nnoo', 'Ekaabo', 'arriverdeci'];
    for(var k = 0; k <= lang.length; k++){
        change.innerHTML = lang[k];
        if(k > lang.length ){
            k = 0;
        }
    };
}
changeLang();*/

//attempt 2 using a setinterval statement
/*
window.onload = function(){
    var lang = ['welcome', 'bienvenue', 'como estas', 'Nnoo', 'Ekaabo', 'arriverdeci'];
    var k = 0;

setInterval(function(){
    document.getElementById('change').InnerHTML = lang[k++];
    if(k == lang.length) k = 0;    
    }, 1000);
}

*/
var lang = ['welcome', 'bienvenue', 'como estas', 'Nnoo', 'Ekaabo'];
var k = 0;

document.getElementById('change').innerHTML = lang[0];
window.setInterval(function(){
    if(k == lang.length - 1){
        k = 0;
    }
    k++;
   /*console.log(k);*/
    document.getElementById('change').innerHTML = lang[k];
}, 2000);