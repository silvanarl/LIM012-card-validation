const validator = {
    isValid:(creditCardNumber)=>{
        let newCardNumber= [];
        for(let i= creditCardNumber.length-1; i>=0;i--){
            newCardNumber.push(parseInt(creditCardNumber[i]));
        }
        let newCardNumberPair =[];
        for(let i= 0; i<newCardNumber.length; i++){
            if(i%2!==0){
                newCardNumberPair.push(newCardNumber[i]*2);
            }
            else{
                newCardNumberPair.push(newCardNumber[i]*1);
            }
        }
        let multiply=[];
        for(let i=0; i<newCardNumberPair.length; i++){
            if(newCardNumberPair[i]>=10){
                multiply.push((newCardNumberPair[i]-10)+1);
            }
            else{
                multiply.push(newCardNumberPair[i]*1);
            }
        }
        let totalSum = multiply.reduce((sum, current) => sum + current, 0);
        let result = false;
        if(totalSum%10===0){
            result = true;
        }
        return result;
    },
    maskify:(creditCardNumber)=>{
    let maskify = '';
    for(let i=0 ; i<creditCardNumber.length;i++){
        if(i<=creditCardNumber.length-5){
            maskify = maskify + '#';
        }
        else{
            maskify = maskify + creditCardNumber[i];
        } 
    }
    return maskify
    }
};
export default validator;
