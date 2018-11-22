function getPageParam(){
    var URL = window.location.href;
    if(URL.indexOf('?') > -1){
        var URLDataArr = URL.split('?');
        var paramArr = URLDataArr[1].split('=');
        var textStr = "";
        for(var i =1; i < paramArr[1].length; i++){
            textStr += paramArr[1][i];
        }

        return paramArr[1].charAt(0).toUpperCase() + textStr;
    }
    return '';
}

/*console.log(getPageParam());*/
var param = getPageParam();
document.getElementById('headingchange').innerHTML = 'hello' + ' ' + param + ', ' + 'let\'s get to know you';