function palindrome(str) {
    // Remove all non-alphanumeric characters and setting it to lower case;
    let myStr = str.replace(/ /g, "").replace(/[^0-9a-z]/gi, '').toLowerCase();
    // Split the string into an array, reverse it and then join it back together;
    let palindrome = myStr.split("").reverse().join("");
    
    return palindrome === myStr;
}