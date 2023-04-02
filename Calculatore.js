let string="";
let buttons=document.querySelectorAll('.button');
let str=Array.from(buttons);
str.forEach((button)=>{
    
    button.addEventListener('click',function fun(e){
        
        if(e.target.innerHTML=='='){
            // The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.
            string=eval(string);
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=='AC'){
           
            document.querySelector('input').value="";
            string="";
        }
        else{
            if(e.target.innerHTML=='X'){
                string=string+'*';
                document.querySelector('input').value=string
            }else{ 
             string=string+e.target.innerHTML;
            document.querySelector('input').value=string;}
        }
    })
    button.addEventListener('keypress',function fun(event){
        
        if(event.key<=9 && event.key>=0 || event.key=='+' || event.key=='-' || event.key=='*'||event.key=='/' ){
           let str1=String(event.key);
            string=string+str1;
            document.querySelector('input').value=string;
        }
        else if(event.keyCode==8){
            document.querySelector('input').value="";
            string="";
        }
        else{
            string=eval(string);
            document.querySelector('input').value=string
        }
        78
       
    })
})