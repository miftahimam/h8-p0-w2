var nama='imam';
var peran='';

if(nama == '' && peran=='') {
  console.log('nama harus diisi');
}
else if(nama=='imam' && peran=='') {
  console.log('Halo ' +nama + ', Pilih peranmu untuk memulai game!');
}
else if(nama=='nina' && peran=='kesatria') {
  console.log('Selamat datang di Dunia Proxytia,' + nama);
  console.log('Halo' + peran + nama +', kamu dapat menyerang dengan senjatamu!')
}
else if(nama=='danu' && peran=='tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo' +peran+nama+', kamu akan membantu temanmu yang terluka.');
}
else if(nama=='zero' && peran=='penyihir') {
  console.log('Selamat datang di Dunia Proxytia,'+nama);
  console.log('Halo ' + peran + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}
