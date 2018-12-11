function telephoneCheck(str) {
   let myreg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

   return myreg.test(str);
}