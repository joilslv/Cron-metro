//const temperature = 110


/*if (login && senha) {
    console.log("Acesso permitido")
    
} else if (login || senha){
    console.log("Senha incorreta")
}
else {
    console.log("Usuário não cadastrado!")
}
operador ternário
login && senha? console.log("Acesso permitido"):console.log("Acesso negado") 

switch e case 
switch (temperature) {
    case 30: console.log("está muito quente!")
        break
        case 10: console.log("está meio frio!")
        break
        case 40: console.log("está pegando fogo!")
        break

    default:
        console.log("nao sei dizer")
        break
}*/

/*Set Interval e Set Time Out */

/*function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
  }
  
  setInterval(updateTime, 1000); // Atualiza a cada segundo
  updateTime(); // Chama a função para exibir o tempo atual imediatamente
*/
let time = document.querySelector(".clock")
let number = 0
let cron


function play() {
    cron = setInterval(function () {
        number++
        time.innerHTML = number
    }, 1000)
}

function pause() {
    clearInterval(cron)
}

function clean() {
    cron.innerHTML = number
    }
/*
    for (let i = 0; i < 60; i++) {
        console.log(i)
    }*/