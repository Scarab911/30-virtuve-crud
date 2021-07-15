const Virtuve = require("./Virtuve");

const pauliausVirtuve = new Virtuve('Pauliaus');
// console.log(pauliausVirtuve);

pauliausVirtuve.intro();
// Sveiki atvyke i Donato virtuve!

pauliausVirtuve.nupirkta('mesa', 20);
pauliausVirtuve.nupirkta('bulves', 50);
pauliausVirtuve.nupirkta('grietine', 4);

pauliausVirtuve.turimiProduktai();
// 1) Mesa: 20
// 2) Bulves: 50
// 3) Grietine: 4

pauliausVirtuve.sunaudota('mesa', 15);
pauliausVirtuve.sunaudota('bulves', 15);
pauliausVirtuve.sunaudota('grietine', 2);

pauliausVirtuve.turimiProduktai();
// 1) Mesa: 5
// 2) Bulves: 35
// 3) Grietine: 2

pauliausVirtuve.sugedesProduktas('bulves');
// KOMENTARAS: sugedusius produktus tiesiog ismetame

pauliausVirtuve.turimiProduktai();
// 1) Mesa: 5
// 2) Grietine: 2