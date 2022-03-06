const setlocalStorage = cadastroInst => {
  localStorage.setItem('cadastroInst', JSON.stringify(cadastroInst))
  // cria a chave cadatroInst na local Storage e tranforma os dados da array cadastrosInst em string
}
const getlocalStorage = () => JSON.parse(localStorage.getItem('cadastroInst'))

// função pra ler querystring
function queryString(parameter) {
  var loc = location.search.substring(1, location.search.length)
  var param_value = false
  var params = loc.split('&')
  for (i = 0; i < params.length; i++) {
    param_name = params[i].substring(0, params[i].indexOf('='))
    if (param_name == parameter) {
      param_value = params[i].substring(params[i].indexOf('=') + 1)
    }
  }
  if (param_value) {
    return param_value
  } else {
    return undefined
  }
}

function ler() {
  //REALIZA A LEITURA

  var index = queryString('id')

  if (index != null) {
    dadosInst = getlocalStorage()[index]
    document.getElementById('salvar').disabled = true
    document.getElementById('instituicao').value = dadosInst.nome
    document.getElementById('cnpj').value = dadosInst.cnpj
    document.getElementById('situacao').value = dadosInst.situacao
    document.getElementById('logradouro').value = dadosInst.logradouro
    document.getElementById('numero').value = dadosInst.numero
    document.getElementById('complemento').value = dadosInst.complemento
    document.getElementById('bairro').value = dadosInst.bairro
    document.getElementById('cidade').value = dadosInst.cidade
    document.getElementById('estado').value = dadosInst.estado
    document.getElementById('cep').value = dadosInst.cep
    document.getElementById('funcionamento').value = dadosInst.funcionamento
    document.getElementById('tipo').value = dadosInst.tipo
    document.getElementById('email').value = dadosInst.email
    document.getElementById('telefone').value = dadosInst.telefone
    document.getElementById('referencia').value = dadosInst.referencia
  } else {
    editar()

    // document.getElementById('editar').disabled = true
    // document.getElementById('excluir').disabled = true
    document.getElementById('excluir').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
  }
}

function gravar() {
  var index = queryString('id')
  var dadosBase = getlocalStorage()
  if (index == null) {
    var novo = new Object()
    novo.nome = document.getElementById('instituicao').value
    novo.cnpj = document.getElementById('cnpj').value
    novo.situacao = document.getElementById('situacao').value
    novo.logradouro = document.getElementById('logradouro').value
    novo.numero = document.getElementById('numero').value
    novo.complemento = document.getElementById('complemento').value
    novo.bairro = document.getElementById('bairro').value
    novo.cidade = document.getElementById('cidade').value
    novo.estado = document.getElementById('estado').value
    novo.cep = document.getElementById('cep').value
    novo.referencia = document.getElementById('referencia').value
    novo.funcionamento = document.getElementById('funcionamento').value
    novo.tipo = document.getElementById('tipo').value
    novo.email = document.getElementById('email').value
    novo.telefone = document.getElementById('telefone').value
    novo.id = ''
    dadosBase.push(novo)
    console.log(dadosBase)
    dadosBase.forEach(id)
    setlocalStorage(dadosBase)
    desativar()
  } else {
    console.log(dadosBase[index].nome)
    console.log(document.getElementById('instituicao').value)
    dadosBase[index].nome = document.getElementById('instituicao').value
    dadosBase[index].cnpj = document.getElementById('cnpj').value
    dadosBase[index].situacao = document.getElementById('situacao').value
    dadosBase[index].logradouro = document.getElementById('logradouro').value
    dadosBase[index].numero = document.getElementById('numero').value
    dadosBase[index].complemento = document.getElementById('complemento').value
    dadosBase[index].bairro = document.getElementById('bairro').value
    dadosBase[index].cidade = document.getElementById('cidade').value
    dadosBase[index].estado = document.getElementById('estado').value
    dadosBase[index].cep = document.getElementById('cep').value
    dadosBase[index].referencia = document.getElementById('referencia').value
    dadosBase[index].funcionamento =
      document.getElementById('funcionamento').value
    dadosBase[index].tipo = document.getElementById('tipo').value
    dadosBase[index].email = document.getElementById('email').value
    dadosBase[index].telefone = document.getElementById('telefone').value
    setlocalStorage(dadosBase)
    desativar()
  }
}

function id(elemento, indice) {
  elemento.id = indice
}

function editar() {
  var apenasler = document.querySelectorAll('.inputuser')
  var apenasler2 = document.querySelectorAll('.inputuser2')
  document.getElementById('salvar').disabled = false
  console.log(apenasler)
  trocaatributo(apenasler)
  trocaatributo(apenasler2)
}

function trocaatributo(elemento) {
  elemento.forEach(element => {
    element.removeAttribute('disabled')
  })
}

function desativar() {
  document.getElementById('instituicao').disabled = true
  document.getElementById('cnpj').disabled = true
  document.getElementById('situacao').disabled = true
  document.getElementById('logradouro').disabled = true
  document.getElementById('numero').disabled = true
  document.getElementById('complemento').disabled = true
  document.getElementById('bairro').disabled = true
  document.getElementById('cidade').disabled = true
  document.getElementById('estado').disabled = true
  document.getElementById('cep').disabled = true
  document.getElementById('funcionamento').disabled = true
  document.getElementById('tipo').disabled = true
  document.getElementById('email').disabled = true
  document.getElementById('telefone').disabled = true
  document.getElementById('referencia').disabled = true
  document.getElementById('editar').disabled = false
  document.getElementById('excluir').disabled = false
  document.getElementById('salvar').disabled = true
}

function cancelar() {
  document.getElementById('instituicao').value = ''
  document.getElementById('cnpj').value = ''
  document.getElementById('situacao').value = ''
  document.getElementById('logradouro').value = ''
  document.getElementById('numero').value = ''
  document.getElementById('complemento').value = ''
  document.getElementById('bairro').value = ''
  document.getElementById('cidade').value = ''
  document.getElementById('estado').value = ''
  document.getElementById('cep').value = ''
  document.getElementById('funcionamento').value = ''
  document.getElementById('tipo').value = ''
  document.getElementById('email').value = ''
  document.getElementById('telefone').value = ''
  document.getElementById('referencia').value = ''
}

function excluir() {
  var index = queryString('id')
  var dadosBase = getlocalStorage()
  if (index == null) {
    index = dadosBase.length - 1
  }
  console.log(index)
  console.log(dadosBase)
  for (let i = 0; i < dadosBase.length; i++) {
    if (dadosBase[i].id == index) {
      dadosBase.splice(i, 1)
      console.log(dadosBase)
      dadosBase.forEach(id)
      setlocalStorage(dadosBase)
      cancelar()
      document.getElementById('editar').disabled = true
      document.getElementById('excluir').disabled = true
      document.getElementById('salvar').disabled = true
    }
  }
}
function validar() {}
