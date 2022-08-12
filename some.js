//some

array = [12,32323,2323,
    {nombre:'Hugo',edad:33,estado:'Jalisco'},
    {nombre:'Fernando',edad:20,estado:'Jalisco'},
    {nombre:'damian',edad:45,estado:'Jalisco'},
    {nombre:'eliza',edad:23,estado:'Jalisco'},
]

const result = array.some(valor => valor.edad === 23)

console.log(result)


// from

let vacoc = 'hello worlds'
console.log(vacoc[5])

vacocc = Array.from(vacoc)
console.log(vacocc)
 

console.log(vacoc.replace(/ /g,' '))



//
const set = new Set ([2,3,'hola',4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys =  array.keys()

const ar_keys = Array.from(keys)

console.log(ar_keys)