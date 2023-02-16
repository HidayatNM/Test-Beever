let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

let numRow = words.length;

for (let i = 0; i < numRow; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += words[j];
  }
  console.log(row);
}
