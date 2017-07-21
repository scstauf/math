// my version of a doodle
// converting base2 strings to base10 numbers
function bin2dec(base2) {
  var base10 = 0,
      n = 0,
      i = 0;

  for (i = 0; i < base2.length; i++) {
    n = parseInt(base2[i]);

    if (isNaN(n) || n > 1) {
      throw new Error('did not supply a valid base2 string');
    }

    base10 += ((1 << (base2.length - i - 1)) * n);
  }

  return base10;
}
