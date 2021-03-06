const questions = [
  //const com as strings de pergunta
  "O que aprendi a fazer hoje?",
  "por que não dormi mais cedo?",
  "o que eu podia ter melhorado pra atender?",
  "que tipo de problema eu tive que resolver hoje?",
  "quantas pessoas eu ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write(`\n\n\n${questions[index]} > `); //stdout vai dar print no meu console (tal qual console.log, mas o PSW não troca de linha quando termina). questions = index
};

ask();
//data = toda vez que tiver algum dado, informação, ele irá receber. data => basicamente é o que ele vai fazer com os dados
const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    //se respostas for menor que questions, perguntar mais

    ask(answers.length);
  } else {
    console.log(answers); //vou mostrar as respostas, guardar no sistema

    process.exit(); //finalizar processo
  }
});
