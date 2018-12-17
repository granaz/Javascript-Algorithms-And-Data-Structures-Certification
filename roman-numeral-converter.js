function convertToRoman(num) {
    // Set the parameters
    let arrRomans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let arrNumerals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let myRoman = "";

    // Subtract the number from the array, so you can convert the numeral to roman;
    // i.e.: 1554 -> 1554-1000 (M) -> 554-500 (MD) -> 54-50 (MDL) -> 4-4 (MDLIV);
    for(let i = arrNumerals.length; i >= 0; i--){
        if(num >= arrNumerals[i]){
            myRoman += arrRomans[i];
            num -= arrNumerals[i];

            // Put the needle in the beginning
            i = 13;
        }
    }

    return myRoman;
}
