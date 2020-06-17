 //Objeto com objeto
 /*const empresa = {
     nome: "Rocketseat",
     cor: "Roxo",
     foco: "Programação",
     endereco:{
         rua:"Rua Guilherme Gembala",
         numero:260
     }
 };
 console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`)
 */


//objetos com arrays e objetos
 const programador = {
    nome: "Ricardo",
    idade: 23,
    tecnologia:[
        {nome: "C++", especialidade:"Desktop"},
        {nome: "Python", especialidade:"Data Science"},
        {nome: "JavaScript", especialidade:"Web/Mobile"}]
 };
console.log(`o usuário ${programador.nome} tem ${programador.idade} anos usa a tecnologia ${programador.tecnologia[2].nome} com especialidade em ${programador.tecnologia[2].especialidade}`);
