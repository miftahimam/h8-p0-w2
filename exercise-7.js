/*nomor 1 */

var rows1 = 5;

var rows2 = 5;

var rows3 = 5;

for(var i = 1; i <= rows1; i++) {
  console.log("*");
}

// nomor 2
for(var i = 1; i <= rows2; i++) {
  var output = '';
  for(var j = 1; j <= rows2; j++) {
    output += '*';
  }
  console.log(output);
}

// nomor 3
for(var i = 1; i <= rows3; i++) {
  var output = '';
  for(var j = 1; j <= i; j++) {
    output += '*';
  }
  console.log(output);
}

