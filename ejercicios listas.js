/* const array = [1, 3, 4, 5, "hello world", true, null,90,89];
 */

listaObjetos = [
  { nombre: "hugo", edad: 33 },
  { nombre: "fernando", edad: 12 },
  { nombre: "jorge", edad: 32 },
  { nombre: "david", edad: 29 },
];

const name = listaObjetos.find((o) => o.nombre === "hugo");
console.log(name);

/* const { edad } = listaObjetos.find((o) => o.nombre === "hugo");
  console.log(edad); */

const array = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"];

const val = array.forEach((v) => {
  console.log(v);
  return 4;
});

//////METODO MAP
//const array22 = array.map((valor, indice) => `${indice+1}- ${valor}`)

const { edad } = listaObjetos.find((d) => d.nombre === "david");

console.log(edad);

//METODO FILTER

listaObjetos2 = [
  { nombre: "hugo", edad: 33 },
  { nombre: "fernando", edad: 12 },
  { nombre: "jorge", edad: 32 },
  { nombre: "david", edad: 30 },
];


  
  
  
  
  const list2 = listaObjetos.filter ((obj)=> obj.edad !== 30 )
  console.log(list2)
   

valores = [3, 34, 3, 5, 1, 9, 5];

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  return acumulado + cur;
});

console.log(suma);

// sort() mnodifica array
const array3 = [5, 8, 2, 7, 0, 1];

console.log(array3);

array3.sort((a, b) => {
  if (a < b) {
    return -1;
  }
});

console.log(array3);

//ordenar array numerico

const array4 = [3, 5, 7, 8, 1, 3, 0, 6];
array4.sort((i, h) => i - h);
console.log(array4);

let lista2 = [   
    {nombre:'hugo',apellido:'romero',edad:33},
    {nombre:'ramon',apellido:'ferna',edad:53},
    {nombre:'laura',apellido:'ramincio',edad:23},
    {nombre:'matalia',apellido:'truco',edad:43},
    {nombre:'jua',apellido:'alexa',edad:41},
    {nombre:'pablo',apellido:'castro',edad:31},
    
]

lista2.sort((a,b)  => b.edad - a.edad)

console.log(lista2)