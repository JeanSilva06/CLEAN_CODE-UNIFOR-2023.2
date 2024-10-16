//antigo
function h(a) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            b.push(a[i]);
        }
    }
    return b;
}

let x = [1, 2, 3, 4, 5, 6];
let y = h(x);
console.log(y);

//novo
function filtrarNumerosPares(sequenciaNumericaDeAlunos) { //parametro era chamado array, talvez gerasse margem para interpretações multiplas aí ficou melhor identificar para quem seria o método
    let numerosParesEncontrados = []; 
    for (let indice = 0; indice < sequenciaNumericaDeAlunos.length; indice++) {
        if (sequenciaNumericaDeAlunos[indice] % 2 === 0) {
            numerosParesEncontrados.push(sequenciaNumericaDeAlunos[indice]);
        }
    }
    return numerosParesEncontrados;
}

let sequenciaNumericaDeAlunos = [1, 2, 3, 4, 5, 6]; //antigo nome era listaDeNumeros --> não era tão descritivo pois não tinha finalidade
let numerosPares = filtrarNumerosPares(sequenciaNumericaDeAlunos);
console.log(numerosPares);


// class Carro {
//         modelo = '';
//         constructor(modelo, ano, marca) {
//             this.modelo = modelo;
//         }

// }
