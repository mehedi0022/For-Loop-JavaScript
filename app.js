
let startingNumber = parseInt(prompt("Enter Starting Number: "));
let lastNumber = parseInt(prompt("Enter Last Number: "));
let sum=0;
let count;
for(startingNumber; startingNumber<=lastNumber; startingNumber++){
    sum = sum + startingNumber;
    document.write(startingNumber);

    count = startingNumber;
    if(count < lastNumber){
        document.write("+");
        count++
    }
}
document.write(" = "+ sum);