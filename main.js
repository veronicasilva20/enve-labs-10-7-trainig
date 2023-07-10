let multiArray = [[],[],[],[],[]];
let numerosUsuario=prompt("ingrese un numero" )
for (let i = 0; i < multiArray.length; i++) {
    for (let J = 0; J < numerosUsuario; J++) {
        let  numeroAleatorio = Math.round(Math.random() * 10)[J];
        multiArray[i].push(numeroAleatorio)
    }
    
}
console.log(multiArray)

