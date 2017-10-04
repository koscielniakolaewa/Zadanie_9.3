var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textZamiana = text.replace('Velociraptor', dinosaurUpperCased);
var dlugosc = textZamiana.length/2;
var cztextZamiana = textZamiana.slice(0,dlugosc);
console.log(cztextZamiana);