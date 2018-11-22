function FormVal(){
    //form object properties for individual input tags by id's
    this.element1 = document.getElementsByTagName("form").value;
    this.element2 = document.getElementById("name").value;
    this.element3 = document.getElementById("email").value;
    this.element4 = document.getElementById("phone").value;
    this.element5 = document.getElementById("radio").value;
    this.element6 = document.getElementById("time").value;
    this.element7 = document.getElementById("day").value;
    this.element8 = document.getElementByTagName("select").value;
    this.element9 = document.getElementById("message");
    this.element10 = document.getElementsByName("staff").nodeValue;

    //form object methods for individual input tags by id's
    this.function1 = function(e){
        e.preventDefault();
        if(element1==" " || element2==" " || element3==" " || element4==" " || element5==" " || element6==" " || element7==" " || element8==" "){
            if(element2 == " "){
                element9.innerHTML = "do  not leave empty";
            }else{
                element2.style.border = " 1px soild green";
            }
            if(element3 == " "){
                element9.innerHTML = "do  not leave empty";
            }else{
                element3.style.border = " 1px soild green";
            }
            if(element4 == " "){
                element9.innerHTML = "do  not leave empty";
            }else{
                element4.style.border = " 1px soild green";
            }
            if(element5 == " "){
                element9.innerHTML = "do  not leave empty";
            }else{
                element5.style.border = " 1px soild green";
            }
            if(element6 == " "){
                element9.innerHTML = "do  not leave empty";
            }else{
                element6.style.border = " 1px soild green";
            }
            if(element7 == " "){
                element9.innerHTML = "do  not leave empty";
            }else{
                element7.style.border = " 1px soild green";
            }
            if(element8 == " "){
                element9.innerHTML = "do  not leave empty";
            }else{
                element8.style.border = " 1px soild gren";
            }
        }else{
            element9.innerHTML = "thanks for completing the form. we'll get back to you shortly";
            element9.innerHTML.style.borderLeft = "20px solid green"; 
        }
    }

}

addEventListener("submit", FormVal);