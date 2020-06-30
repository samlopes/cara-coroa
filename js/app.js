document.getElementById("botaoJogar").onclick = () => {
  let valor = Math.random();

  let imagem = "";

  if (valor > 0.5) {
    imagem = "coroa";
  } else {
    imagem = "cara";
  }

  let caminhoImagem = `assets/images/${imagem}.png`;
  document.getElementById("imagemMoeda").src = caminhoImagem;
};

// let alunoA = "lucas";
// let alunoB = "João";

// let nomeAlunos = ["Lucas", "João", "Pedro", "Gustavo", "Luiz"];

// i = 0 - 0 + 1

// i = i + 1 -> i = 0 + 1 = 1
// i = 1 + 1 = 2
// i = 2 + 1 = 3

// for (let i = 0; i <= 4; i++) {
//   console.log("Nome do aluno: " + nomeAlunos[i]);
// }

// let aprovado = true;

// let contador = 0;

// while (contador < 3) {
//   alert("Teste");
//   contador++;
// }
