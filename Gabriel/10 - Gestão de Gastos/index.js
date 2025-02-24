// Função que roda outras funções para fazer a validação do email
function validadorEmail() {
  alternadorBotoes();
  avisoErrosEmail();
}

// Função que roda outras funções para fazer a validação da senha
function validadorSenha() {
  alternadorBotoes();
  avisoErroSenha()
}

// Função que verifica se o campo de e-mail possui um valor e, caso tenha, chama a função de validação.
function EmailValido() {
  const email = document.getElementById('email').value;

  if (!email) {
      return false;
  } else {
      return validacaoEmail(email);
  }
}

// Função que verifica se a senha foi preenchida, retornando true se houver valor e false caso contrário.
function SenhaValida() {
const password = document.getElementById('senha').value;

if (!password) {
  return false;
} else {
  return true;
}
}

// Função que valida o formato do e-mail usando uma expressão regular.
function validacaoEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Função que mostra aviso de erro se tiver erro no campo de email
function avisoErrosEmail() {
  const email = document.getElementById('email').value;

  // aviso-email-obrigadorio
  if (!email){
    document.getElementById('aviso-email-obrigadorio').style.display = "block";
  } else {
    document.getElementById('aviso-email-obrigadorio').style.display = "none"
  }

  // aviso-email-validade
  if (validacaoEmail(email)) {
    document.getElementById('aviso-email-validade').style.display = "none"
  } else {
    document.getElementById('aviso-email-validade').style.display = "block"
  }

}

// Função que mostra aviso de erro se tiver erro no campo de senha
function avisoErroSenha() {
  const senha = document.getElementById('senha').value;
  if (!senha) {
    document.getElementById('aviso-senha-obrigadoria').style.display = "block";
  } else {
    document.getElementById('aviso-senha-obrigadoria').style.display = "none"
  }
}

// Função que ativa ou desativa os botôes de recuperar senha e entrar
function alternadorBotoes() {
  const emailvalidacao = EmailValido();
  const senhavalidacao = SenhaValida();
  
  document.getElementById('recuperar-senha-botao').disabled = !emailvalidacao;
  document.getElementById('login-botao').disabled = !senhavalidacao || !emailvalidacao;
}