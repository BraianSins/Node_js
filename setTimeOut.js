//setTimeOut vai rodar uma função depois de x Milissegundos.
const timeOut = 3000;
const finished = ()  => console.log('Done!')

setTimeout(finished, timeOut)

console.log("Mostrar")


//finished é uma função "callback", "timeOut" é o tempo de espera para ela ser chamada