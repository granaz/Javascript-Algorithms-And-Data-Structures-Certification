function convertToRoman(num) {
    let arrNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        arrNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    // The output roman numeral
    let myRoman = "", myNum = num;

    // Run the numeral first, then run the numbers to get into the right one;
    for(let i = 0; i < arrNumerals.length; i++){
        while(arrNumber[i] <= myNum){
            myRoman += arrNumerals[i];
            myNum -= arrNumber[i];
        }
    }    

    return myRoman;
}