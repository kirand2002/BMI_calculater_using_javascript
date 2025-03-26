const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    const message=document.querySelector('#message')

    if (height == "" || height <=0 || isNaN(height)){
        result.innerHTML=`please enter the valid height ${height}`;
    } else if (weight == "" || weight <=0 || isNaN(weight)){
        result.innerHTML=`please enter the valid weight ${weight}`;
    }else{
        const res=(weight /((height*height)/10000)).toFixed(1)

        //result
        result.innerHTML=`<span>${res}</span>`;

        if (res<18.5){
            message.innerHTML=" BMI category :  UnderWieght"
        }else if(res>=18.5 && res<=24.9){
            message.innerHTML=" BMI category :  NormalWeight"
        }else if(res>=25 && res<=29.9){
             message.innerHTML=" BMI category :  OverlWeight"
        }else if (res>=30){
             message.innerHTML=" BMI category :  Obese"
        }
    

        }

        
    

})