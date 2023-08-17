function add(n1,n2){
    let sum = n1 + n2;
    console.log(sum);
    return sum;
}

function subtract(num1,num2){
    let res=num1 - num2;
    console.log(res);
    return res;
}

function multiply(N1, N2){
    let res = N1 *N2;
    console.log(res);
    return res;
}

function divide(Num1,Num2){
    if( Num2 != 0){
        let res = Num1 / Num2;
        console.log(res);
        return res;
    }else{
        return("Error: Num2 =0!!!");
    }
}

function myCalculator(operation,num1,num2){
    if(operation==add(num1,num2)){
      console.log(add(num1,num2));
    }
    else if(operation==subtract(num1,num2)){
       console.log(subtract(num1,num2));
    }
    else if(operation==multiply(num1,num2)){
        console.log(multiply(num1,num2));
    }
    else if(operation==divide(num1,num2)){
        console.log(divide(num1,num2));
    }
    else{
        return("invalid");
    }
    return myCalculator();
}
myCalculator(add(3,45));