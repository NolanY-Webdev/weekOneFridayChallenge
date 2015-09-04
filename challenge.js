function finder(source, find) {
  var found = false;
  var doubleSource = source + source;
  var dblLow = doubleSource.toLowerCase();
  var findLow = find.toLowerCase();
  for (var i = 0; i < source.length; i++ ) {
    var subStr = dblLow.substring(i, find.length + i);
    if (findLow == subStr) {
      found = true;
    }
  }
  return found;
}
