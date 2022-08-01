// let operator=['+','-','*','/'];
let flagoperator = 0;
let flagdecimal = 0;
function evaluator(self){
    
            
    let input=document.getElementById('result');

    if(self=='c'){
        location.reload();
    }
    else if(self=='='){
        let answer=eval(input.value)
        input.value=`${answer}`
    }
    else {
        if(self=="+" || self=="-" ||self=="*"||self=="/")//operator
        {
            
        flagoperator++;
        if(flagoperator==1)
        {
            input.value+=`${self}`
        }
        flagdecimal=0;
       }
        else if(self=='.')
        {
            flagdecimal++;
            if(flagdecimal==1)
            {
                input.value+=`${self}`
            }   
        
       }
       else //operands
       {
        input.value+=`${self}`;
        flagoperator=0;
       }
    }
  }
function back(){

    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
    
}

    





























