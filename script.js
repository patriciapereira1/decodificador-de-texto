function aplicarSubstituicoes(texto, regras) {
  // Aplica as substituições
  for (const [chave, valor] of Object.entries(regras)) {
    const regex = new RegExp(chave, 'g');
    texto = texto.replace(regex, valor);
  }
  return texto;
}

function criptografar() {
  const inputTexto = document.getElementById('inputTexto').value;
  const regrasCriptografia = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  const textoCriptografado = aplicarSubstituicoes(inputTexto, regrasCriptografia);
  document.getElementById('outputTexto').value = textoCriptografado;
  document.querySelector('.local-da-imagem').style.backgroundImage = 'none';
}

function descriptografar() {
  const inputTexto = document.getElementById('inputTexto').value;
  const regrasDescriptografia = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  const textoDescriptografado = aplicarSubstituicoes(inputTexto, regrasDescriptografia);
  document.getElementById('outputTexto').value = textoDescriptografado;
}

function copiar() {
  const outputTexto = document.getElementById('outputTexto');
  outputTexto.select();
  document.execCommand('copy');
  alert('Texto copiado para a área de transferência!');
  // Limpa o campo de saída após a cópia
  outputTexto.value = '';
  document.querySelector('.local-da-imagem').style.backgroundImage = 'url("assets/1.PNG")';
}