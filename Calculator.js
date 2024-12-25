console.log("Namaste");

const input=document.querySelector('.js-input');

function addvalue(value){
    input.value+=value;
}

function givevalue(){
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value='ERROR';
    }
    
}

function clearvalue(){
    input.value='';
}
