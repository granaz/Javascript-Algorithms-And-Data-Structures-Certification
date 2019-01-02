function rot13(str) {
  // Setting the alphabet
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let myStr = str.split(""),
    deciphed = [];

  myStr.map((letter) => {
    let index = alphabet.indexOf(letter);

    if (index !== -1) {
      let alphabetIndex = (index + 13 === 26) ? 0 : index + 13;

      // Convert the index to the alphabet index
      if (alphabetIndex > alphabet.length) {
        alphabetIndex = (alphabet.length - alphabetIndex < 0) ? (alphabet.length - alphabetIndex) * -1 : alphabet.length - alphabetIndex;
      }

      deciphed.push(alphabet[alphabetIndex]);
    } else {
      deciphed.push(letter);
    }
  });

  return deciphed.join("");
}
