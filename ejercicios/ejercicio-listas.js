let lista = ["huvo", "jamon", "queso", "pan", "cafe"];

lista.push("Aceite Girasol");

console.log(lista);

lista.pop();

console.log(lista);

let peliculas = [
  { titulo: "Matrix", director: "juan", fecha: new Date("2002-03-25") },
  { titulo: "fire man", director: "pablo", fecha: new Date("2011-03-25") },
  { titulo: "laberito ", director: "feliz", fecha: new Date("2001-03-25") },
];

console.log(peliculas.titulo);

let peliculas2010 = peliculas.filter((p) => p.fecha > new Date("2010-01-21"));

console.log(peliculas2010);

let directors = [];

peliculas.map(function (di) {
  directors.push(di.director);
});

console.log(director);

let titulos = [];

peliculas.map(function (ti) {
  titulos.push(ti.titulo);
});

console.log(titulos);

let peliculasConcat = titulos.concat(directors)

console.log(peliculasConcat)

let peliculasPropa = [titulos,...directors]

console.log(peliculasPropa)

