
let startingNumber = parseInt(prompt("Enter Starting Number: "));
let lastNumber = parseInt(prompt("Enter Last Number: "));
let sum=0;
let count;
if(startingNumber<lastNumber){
    for(startingNumber; startingNumber<=lastNumber; startingNumber++){
        sum = sum + startingNumber;
        document.write(startingNumber);
    
        count = startingNumber;
        if(count < lastNumber){
            document.write("+");
        }
    }
}
else{
    for(startingNumber; startingNumber>=lastNumber; startingNumber--){
        sum = sum + startingNumber;
        document.write(startingNumber);
    
        count = startingNumber;
        if(count > lastNumber){
            document.write("+");
        }
    }
}
document.write(" = "+ sum);