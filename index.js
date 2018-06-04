var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors')


// fs.stat('./kot.jpg', function(err, stats) {
//   var statMode = new StatMode(stats);
//   console.log(stats);
// });

// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//   console.log('Dane przed zapisem!'.blue);
//   console.log(data);
//   fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
//       if (err) throw err;
//       console.log('Zapisano!'.blue);
//       fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//           console.log('Dane po zapisie'.blue)
//           console.log(data);
//       });
//   });
// });

fs.readdir('./modules', 'utf-8', function (err, data) {
  console.log('Dane przed zapisem'.red);
  console.log(data);
  if (err) throw err
  console.log('Zawartość katalogu zapisano do pliku nowy.txt'.blue)
  fs.writeFile('./odczytKatalogu.txt', data, function (err) {
    if (err) throw err
    console.log('Dane po zapisie: ' + data)
  })
})