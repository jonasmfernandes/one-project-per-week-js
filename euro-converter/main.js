function calcular(){
  let real = document.getElementById('entrada');
  let text = document.getElementById('text') 

  if (real.value.length == 0) {
    alert('Campo Vazio! Digite um número!')
  } else {
    let realEuro = Number(real.value)
    let euro = 6.5
    let euroFix = euro.toFixed(2)
    text.innerHTML = `O Valor em Real é de: R$ ${realEuro*euroFix}`
  }
}
