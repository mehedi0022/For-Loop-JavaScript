
let startingNumber = parseInt(prompt("Enter Starting Number: "));
let lastNumber = parseInt(prompt("Enter Last Number: "));
let sum=0;
for(startingNumber; startingNumber<=lastNumber; startingNumber++){
    sum = sum + startingNumber;
    document.write(startingNumber + "+");
}
document.write(" = "+ sum);