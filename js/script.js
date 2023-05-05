// console.log("Olá Mundor")
// console.log(`Resultado: ${parseInt(n1) + parseInt(n2)}`)
// console.log(`Resultado: ${parseInt(n1) % parseInt(n2)}`) 
// console.log(`Resultado: ${parseInt(n1) / parseInt(n2)}`) 
// console.log(`Resultado: ${parseInt(n1) - parseInt(n2)}`) 
// var n1 = "25"
// var n2 = "2"
//                                           //true  //false
// resultado = !(parseInt(n1)%parseInt(2)) ? "par" : "impar";
// console.log(`O numero é: ${resultado}`)

let frutas = ["banana","maça","morango","carambola","acerola"];
// console.table(frutas);

// frutas.push("melão");
// frutas.pop();

let frutaQEuQuero = frutas.indexOf("acerola")

frutas.splice(frutaQEuQuero, 1)
console.table(frutas)

frutas.forEach( (fruta) => {
    console.log(`Olha ele: ${fruta}`)
} )