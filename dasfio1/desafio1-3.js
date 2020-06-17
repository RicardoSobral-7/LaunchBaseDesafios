// const usuarios = [
//     {nome: "Ricardo", tecnologias:["HTML", "CSS","JavaScript"]},
//     {nome: "Guilherme", tecnologias:["PHP", "Node.JS","JavaEE"]},
//     {nome: "Carlos", tecnologias:["React Native", "React.JS","Flutter"]}
// ]

// for(let usuario of usuarios){
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`);
// }

// //busca tecnologia

// function chegaSeUsuarioUsaCSS(usuario){
//     for(let tecnologia of usuario.tecnologias){
//         if(tecnologia == "CSS")return true
//     }
//     return false
// }

// for(let i = 0; i < usuarios.length; i++){
//     const usuarioTrabalhaComCSS = chegaSeUsuarioUsaCSS(usuarios[i]);
//     if(usuarioTrabalhaComCSS){
//         console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
//     }
// }


const usuarios = [
    {
        nome: "Ricardo",
        receitas:[115.3, 48.7, 98.3, 14.5],
        despesas:[85.3, 13.5, 19.9]
    },
    {
        nome: "Júlia",
        receitas:[24.6, 214.3, 45.3],
        despesas:[185.3, 12.1, 120.0]
    },
    {
        nome: "Roseli",
        receitas:[9.8, 120.3, 340.2, 45.3],
        despesas:[450.2, 29.9]
    }
];

function somaNumeros(numeros){
    let soma = 0;
    for (numero of numeros){
        soma = soma + numero;
    }
    return soma;
}

function CalcSaldo(receitas, despesas){

    const totalReceitas = somaNumeros(receitas);
    const totalDespesas = somaNumeros(despesas);

    return totalReceitas - totalDespesas

    

}


for(usuario of usuarios){
    let saldo = CalcSaldo(usuario.receitas,usuario.despesas)
    if(saldo > 0){
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}.`)
    }else{
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}.`)
    }
}
