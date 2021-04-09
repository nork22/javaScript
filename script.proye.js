let J22validator = {
    handlesubmit:(event)=>{ 
    event.preventDefault();
    let send = true;
    let inputs = Form.querySelectorAll('inputs');
    for(let i=0;i<inputs.length;i++){ 
        let input = inputs[i];
        let  check= J22validator.chekinput(input);
        if(check!== true){ 
            send= false;
         //exibir o erro

         }

        }

        if(send){
        Form.submit();
    }
  
}

};
let Form = document.querySelector('.j22validator');
Form.addEventListener('submit', J22validator . handlesubmit);