function sym(args) {
  var pre = [...arguments];

  return pre.reduce((arrTo, arrFrom) => {
    let arr1, arr2, result;

    arr1 = arrTo.filter(item => {
      return !(arrFrom.indexOf(item) > -1);
    });

    arr2 = arrFrom.filter(item => {
      return !(arrTo.indexOf(item) > -1);
    });

    result = arr1.concat(arr2);

    return result.filter((item, index, self) => {
      return index == self.indexOf(item);
    });
  });  
}