function dividirTexto() {
    const textoOriginal = document.getElementById('inputTexto').value;
    const caracteresIndesejados = '-!@#$%^&*;":{}|<>0123456789';
    const palavraIndesejada = 'Unknown';
    const tamanhoMaximo = 4000;
    let posicaoInicial = 0;
    let posicaoFinal = tamanhoMaximo;
    let parte = 1;

    while (posicaoInicial < textoOriginal.length) {
      let textoParte = textoOriginal.substring(posicaoInicial, posicaoFinal);
      textoParte = limparCaracteres(textoParte, caracteresIndesejados);
      textoParte = removerPalavra(textoParte, palavraIndesejada);

      if (textoParte.length > tamanhoMaximo) {
        textoParte = textoParte.substring(0, tamanhoMaximo);
        mostrarAviso(parte);
      }

      exibirParteTexto(textoParte, parte);

      posicaoInicial += tamanhoMaximo;
      posicaoFinal += tamanhoMaximo;
      parte++;
    }
  }

  function exibirParteTexto(texto, parte) {
    const elementoParte = document.createElement('p');
    elementoParte.textContent = `Parte ${parte}: ${texto}`;
    document.getElementById('partesTexto').appendChild(elementoParte);
  }

  function mostrarAviso(parte) {
    const elementoAviso = document.createElement('p');
    elementoAviso.textContent = `Aviso: A parte ${parte} excedeu os 4000 caracteres.`;
    document.getElementById('partesTexto').appendChild(elementoAviso);
  }

  function limparCaracteres(texto, caracteresIndesejados) {
    const regex = new RegExp(`[${caracteresIndesejados}]`, 'g');
    return texto.replace(regex, '');
  }

  function removerPalavra(texto, palavraIndesejada) {
    const regex = new RegExp(palavraIndesejada, 'g');
    return texto.replace(regex, '');
  }