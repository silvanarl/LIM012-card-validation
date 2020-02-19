const validator = {
    isvalid:(creditCardNumber)=>{
            let newCardNumber= [];
        for(let i= creditCardNumber.length-1; i>=0;i--){
            newCardNumber.push(parseInt(creditCardNumber[i]));
        }
        console.log(newCardNumber);

        let newCardNumberPair =[];
        let newCardNumberOdd =[];
        for(let i= 0; i<newCardNumber.length; i++){
            if(i%2!==0){
                newCardNumberPair.push(newCardNumber[i]*2);
            }
            else{
                newCardNumberPair.push(newCardNumber[i]*1);
            }
        }
        console.log('Nuevo array x2 invertido',newCardNumberPair);

        let multiply=[];
        for(let i=0; i<newCardNumberPair.length; i++){
            if(newCardNumberPair[i]>=10){
                multiply.push((newCardNumberPair[i]-10)+1);
            }
            else{
                multiply.push(newCardNumberPair[i]*1);
            }
        }
        console.log(multiply);

        const totalSum = multiply.reduce((sum, current) => sum + current, 0);
        console.log('Suma de todo es:',totalSum);
        let result = false;
        if(totalSum%10===0){
            result = true;
        }
        else{
        }
        return result;
    },
    maskify:(creditCardNumber)=>{
        let xMaskify = '';
        for(let i=0 ; i<creditCardNumber.length;i++){
            if(i<=creditCardNumber.length-5){
                xMaskify = xMaskify + '#';
            }
            else{
                xMaskify = xMaskify + creditCardNumber[i];
            } 
        }
        return xMaskify
    }
};
export default validator;
