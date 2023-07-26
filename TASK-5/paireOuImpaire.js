let numbers = [1,54,7,6,878,7,86,98,21,3,9];
for (let i=0; i < numbers.length ;i++){
    if(i%2==0){
        console.log(numbers[i] + ":" + "This number is even");
    }
    else{
        console.log(numbers[i] + ":" + "This number is odd");
    }
}