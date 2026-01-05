// function firstLetterUpperCase(name: string): string {
//   let firstLetter = name.charAt(0).toUpperCase;
//   return firstLetter + name.substring(1);
// }

//TIPANDO OBJETO
// function resumo(usuario: { nome: string; idade?: number }) {
//   if (usuario.idade !== undefined) {
//     return `Ola ${usuario.nome}, tudo bem? voce tem ${usuario.idade} anos`;
//   } else {
//     return `Ola ${usuario.nome}, tudo bem?`;
//   }
// }

// let u = { nome: "daniel", idade: 19 };

//MULTYPE
// function mostrarIdade(idade: string | number) {
//   console.log("minha idade e: " + idade);
// }

// mostrarIdade(90);
// mostrarIdade("90");

//TYPE
// type User = {
//   nome: string;
//   idade: number;
// };

// function resumo(usuario: User) {
//   return `Ola ${usuario.nome}, tudo bem? voce tem ${usuario.idade} anos`;
// }

//LITERALS
// function mostrarTexto(
//   texto: string,
//   alinhamento: "left" | "right" | "center"
// ) {}

// mostrarTexto("Daniel", "left");
// mostrarTexto("Daniel", "teste");
