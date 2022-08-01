var sec = 0
var min = 0
var hora = 0
var interval

function doisdigitos(digitos){
  if(digitos<10){
    return('0'+digitos)
  }else{
    return(digitos)
  }
}

function start() {
  interval = setInterval(relogio, 1000)
}

function pouse() {
  clearInterval(interval)
}

function stop() {
  clearInterval(interval)
  sec = 0
  min = 0
  hora = 0
  document.getElementById('relogio').innerText = '00:00:00'
}

function relogio() {
  sec++
  if (sec == 60) {
    min++
    sec = 0
    if (min == 60) {
      hora++
      min = 0
    }
  }
  document.getElementById('relogio').innerText = doisdigitos (hora) + ':' + doisdigitos (min) + ':' + doisdigitos(sec)
}
