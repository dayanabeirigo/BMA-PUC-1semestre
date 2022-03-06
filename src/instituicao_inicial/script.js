var cadastroInicial = [
  //variável se refere a base de dados do sistema
  {
    nome: 'Cras Centro',
    cnpj: '18.629.840/0001-83',
    situacao: 'Ativa',
    logradouro: 'Rua Capitão Fausto de Paiva',
    numero: 2,
    complemento: '',
    bairro: 'Jardim Bela Vista',
    cidade: 'Poços de Caldas',
    estado: 'Minas Gerais',
    cep: '37701-267',
    email: 'cracentro@gmail.com',
    telefone: '(35) 2513-5151',
    funcionamento:
      'Das 10h às 19h de segunda a quinta-feira e nas sextas-feiras das 8h',
    tipo: 'Equipamento Público',
    referencia: '',
    id: ''
  },
  {
    nome: 'Cras Sul',
    cnpj: '18.629.840/0001-83',
    situacao: 'Inativa',
    logradouro: 'João Roberto Bonifácio',
    numero: 55,
    complemento: 'São Sebastião II, 2',
    bairro: 'Jardim Bela Vista',
    cidade: 'Poços de Caldas',
    estado: 'Minas Gerais',
    cep: '37706-247',
    email: 'crasul@gmail.com',
    telefone: '(35) 2513-0000',
    funcionamento:
      'Das 8h às 16h de segunda a quinta-feira e nas sextas-feiras das 8h às 12h',
    tipo: 'Equipamento Público',
    referencia: '',
    id: ''
  },
  {
    nome: 'Abrigo São Francisco',
    cnpj: '02.721.962/0001-65',
    situacao: 'Ativa',
    logradouro: 'Rua Araguaia',
    numero: 56,
    complemento: '',
    bairro: 'Jardim dos Estados',
    cidade: 'Poços de Caldas',
    estado: 'Minas Gerais',
    cep: '37701-076',
    email: 'abrigosaofrancisco@gmail.com',
    telefone: '(35) 2513-4444',
    funcionamento: 'Das 8h às 17h de segunda a sexta-feira',
    tipo: 'Entidade Socioassistencial',
    referencia: '',
    id: ''
  }
]

const setlocalStorage = cadastroInst => {
  localStorage.setItem('cadastroInst', JSON.stringify(cadastroInst))
  // cria a chave cadatroInst na local Storage e tranforma os dados da array cadastrosInst em string
}

function id(elemento, indice) {
  elemento.id = indice
}

const getlocalStorage = () => JSON.parse(localStorage.getItem('cadastroInst'))

if (getlocalStorage() == null) {
  cadastroInicial.forEach(id)
  setlocalStorage(cadastroInicial)
}

dadosBase = getlocalStorage()

function buscaInst() {
  //Função atribui o valor digitado pelo usuário à uma variável e chama a função que busca dados na base de dados
  var cnpj = document.getElementById('cnpj').value //Recebe o CNPJ digitado na interface

  buscaCNPJ(cnpj) //Faz a chamada à função que busca os dados na LocalStorage com base em um CNPJ
}

function buscaCNPJ(cnpj) {
  dadosBase = getlocalStorage()
  var tipo = document.getElementById('tipo').value
  var instituicao = document.getElementById('instituicao').value.toLowerCase()
  var situacao = document.getElementById('situacao').value
  var baseFiltrada = dadosBase

  if (tipo != 0) {
    baseFiltrada = baseFiltrada.filter(item => item.tipo.includes(tipo))
  }

  if (situacao != 0) {
    baseFiltrada = baseFiltrada.filter(item => item.situacao.includes(situacao))
  }

  if (instituicao != 0) {
    baseFiltrada = baseFiltrada.filter(item =>
      item.nome.toLowerCase().includes(instituicao)
    )
  }

  // função acessa os dados de cada instituição e compara com o CNPJ digitado pelo usuário. Caso encontre o valor, a função apresenta os dados da insituição na tabela
  var corpoTabela = ''
  for (let x = 0; x < baseFiltrada.length; x++) {
    dadosInst = baseFiltrada[x]
    if (cnpj != 0) {
      if (cnpj == dadosInst.cnpj) {
        var html = '' //Variável que vai conter o trecho de HTML com o corpo da tabela de pessoas
        html = html + '<tr>' //Adiciona a tag TR (linha) ao HTML do corpo da tabela
        html =
          html +
          '<td><a href="#" onclick="leitura(' +
          dadosInst.id +
          ');" > ' +
          dadosInst.nome +
          '</a></td>' //Adiciona a célula de dados (TD) com o nome
        html = html + '<td>' + dadosInst.cnpj + '</td>' //Adiciona a célula de dados (TD) com o cnpj
        html = html + '<td>' + dadosInst.situacao + '</td>' //Adiciona a célula de dados (TD) com a situacao
        html =
          html +
          '<td>' +
          dadosInst.logradouro +
          ', ' +
          dadosInst.numero +
          ', ' +
          dadosInst.complemento +
          ' - ' +
          dadosInst.bairro +
          ' - ' +
          dadosInst.cidade +
          ' - ' +
          dadosInst.estado +
          ' - ' +
          dadosInst.cep +
          ' - ' +
          dadosInst.referencia +
          '</td>'
        html = html + '<td>' + dadosInst.funcionamento + '</td>'
        corpoTabela = corpoTabela + html
      }
    } else {
      var html = '' //Variável que vai conter o trecho de HTML com o corpo da tabela de pessoas
      html = html + '<tr>' //Adiciona a tag TR (linha) ao HTML do corpo da tabela
      html =
        html +
        '<td><a href="#" onclick="leitura(' +
        dadosInst.id +
        ');" > ' +
        dadosInst.nome +
        '</a></td>' //Adiciona a célula de dados (TD) com o nome
      html = html + '<td>' + dadosInst.cnpj + '</td>' //Adiciona a célula de dados (TD) com o cnpj
      html = html + '<td>' + dadosInst.situacao + '</td>' //Adiciona a célula de dados (TD) com a situacao
      html =
        html +
        '<td>' +
        dadosInst.logradouro +
        ', ' +
        dadosInst.numero +
        ', ' +
        dadosInst.complemento +
        ' - ' +
        dadosInst.bairro +
        ' - ' +
        dadosInst.cidade +
        ' - ' +
        dadosInst.estado +
        ' - ' +
        dadosInst.cep +
        ' - ' +
        dadosInst.referencia +
        '</td>'
      html = html + '<td>' + dadosInst.funcionamento + '</td>' //Adiciona a célula de dados (TD) com
      corpoTabela = corpoTabela + html
      console.log(dadosInst.id)
    }
  }

  console.log(corpoTabela)
  cabecatabela =
    '<tr><th class="nome1">Nome</th><th class="cnpj1">CNPJ</th><th >Situação</th>  <th>Endereço</th><th>Funcionamento</th></tr>'
  if (corpoTabela != 0) {
    document.getElementById('cabecatabela').innerHTML = cabecatabela
    document.getElementById('corpoTabela').innerHTML = corpoTabela
  } else {
    document.getElementById('corpoTabela').innerHTML =
      'Instituição não encontrada'
  }
  cancelar()
}

function cancelar() {
  document.getElementById('instituicao').value = ''
  document.getElementById('cnpj').value = ''
  // document.getElementById('situacao').value = ''
  // document.getElementById('tipo').value = ''
}

function leitura(id) {
  window.location = 'http://127.0.0.1:5501/Producao/index.html?id=' + id
}

function cadastranova() {
  location.href = 'http://127.0.0.1:5501/Producao/index.html'
}
