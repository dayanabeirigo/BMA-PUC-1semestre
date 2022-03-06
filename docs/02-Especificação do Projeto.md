# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

Homens e mulheres que representem ou estejam vinculadas às entidades socioassistencial regularmente constituídas e inscritas no COMSEA, como por exemplo: APAE, ADEFIP, Igrejas, etc.

É necessário que tais usuários tenham um perfil administrativo, pesquisador e estejam dispostos a promover o maior controle possível na distribuição de cestas básicas.

Necessidades do Usuário:
- Poder verificar o número de cestas básicas disponíveis para distribuição;
- Poder consultar o CPF dos receptores a fim de verificar o registro da distruição;
- Poder cadastrar um receptor caso o mesmo se enquadre no perfil;
- Através da consulta do CPF, ter uma facilidade em visualizar que tipo de cesta a pessoa recebe e se ainda não recebeu no mês. 



## Personas

<table>
  <tr>
    <th>Foto</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Aplicativos</th>
    <th>Motivações</th>
    <th>Frustrações</th>
    <th>Hobbies, História</th>
  </tr
        <tr>
    <td><img title="Maria Aparecida" src="https://images.unsplash.com/photo-1626668011687-8a114cf5a34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/></td>
    <td>Maria Aparecida</td>
    <td>
      <ul>
        <li>68 anos</li>
        <li>Aposentada</li>
        <li>Mora de aluguel em Poços de Caldas com a filha e dois netos</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Não usa redes sociais</li>
         </ul>
    </td>
    <td>
      <ul>
        <li>Cuidar da família</li>
        <li>Participar da missa</li>
        <li>Dançar forró</li>
      </ul>
    </td>
    <td>
      <li>Não terminou o ensino fundamental</li>
      <li>Não tem casa própria</li>
      <li>Nunca viu o mar</li>
    </td>
    <td>
      <li>Ver novelas</li>
      <li>Costurar</li>
       <li>Sua filha está desempregada desde meados de 2020 e, por isso, tornou-se a principal provedora do sustento da filha e dos dois netos</li>
          </td>
  </tr>
  <tr>
    <td><img title="Aline" src="https://images.unsplash.com/photo-1602184572201-89c7deeddf3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"/></td>
    <td>Aline</td>
    <td>
      <ul>
        <li>36 anos</li>
        <li>Auditora da CGU</li>
        <li>Mora no Rio de Janeiro</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Emicida</li>
        <li>Angela Merkel</li>
        <li>Emmanuel Macron</li>
      </ul>
    </td>
    <td>
      <li>Não consegue executar a auditoria com facilidade por falta de disponibilidade da informação nos órgãos públicos</li>
      <li>Está sobrecarrega com as demandas de trabalho</li>
     </td>
    <td>
      <li>Música</li>
      <li>Cozinhar com o filho</li>
         <li>Foi nomeada presidente da comissão de acompanhamento da implementação da transparência ativa dos órgão públicos</li>
    </td>
  </tr>
    <tr>
    <td><img title="Jose Augusto" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80"/></td>
    <td>José Augusto</td>
    <td>
      <ul>
        <li>50 anos</li>
        <li>Padre</li>
        <li>Mora em Poços de Caldas</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
        </ul>
    </td>
    <td>
      <ul>
        <li>Jornal O Globo</li>
        <li> Padre Júlio Lancellotti</li>
        <li>Papa Francisco</li>
      </ul>
    </td>
    <td>
      <li>Deseja que a sociedade se torne mais caridosa</li>
      <li>Não consegue ajudar a todos que estão em insegurança alimentar</li>
         </td>
    <td>
      <li>Ver jornal</li>
      <li>Ler a Bíblia</li>
      <li>No último ano, percebeu que os projetos sociais da igreja não tem conseguido contemplar todas as pessoas em situação de vulnerabildiade social</li>
    </td>
  </tr>
  <tr>
    <td><img title="Paulo" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80"/></td>
    <td>Paulo</td>
    <td>
      <ul>
        <li>31 anos</li>
        <li>Assistente Social</li>
        <li>Mora em Poços de Caldas</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Carl Gustav Jung</li>
        <li>Josephina Albano</li>
        <li>Chico Buarque</li>
      </ul>
    </td>
    <td>
      <li>Acha o trabalho que executa extremamente burocrático</li>
        </td>
    <td>
      <li>Jogar Futebol</li>
      <li>Música</li>
      <li>Percebeu o aumento de demanda de benefícios sociais na pandemia, entretanto o processo de concessão é demorado uma vez que envolve dois equipamentos públicos diferentes</li>
    </td>
  </tr>
  <tr>
    <td><img title="Renato Luís" src="https://images.unsplash.com/photo-1599256621730-535171e28e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80" /></td>
    <td>Renato Luís</td>
    <td>
      <ul>
        <li>28 anos</li>
        <li>Servidor Público</li>
        <li>Mora em Poços de Caldas</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Youtube</li>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Jão</li>
        <li>Mc Tha</li>
      </ul>
    </td>
    <td>
      <li>Não consegue fornecer os dados solicitados pela diretora do seu trabalho dentro dos prazos</li>
      <li>Tem dificuldade em consolidar dados</li>
    </td>
    <td>
      <li>Música</li>
      <li>Barzinho com os amigos</li>
           <li>Ele deseja ter mais facilidade em obter os dados do banco de alimentos com seus colegas de trabalho e elaborar relatórios com mais facilidade </li>
    </td>
  </tr>
  <tr>
    <td><img title="Roberta"
        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/></td>
    <td>Roberta</td>
    <td>
      <ul>
        <li>38 anos</li>
        <li>Servidora Pública (Diretora)</li>
        <li>Mora Poços de Caldas</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>G1</li>
        <li>Instagram</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Jornais</li>
         <li>Josué de Castro</li>
         <li>Nina Simone</li>
       </ul>
    </td>
    <td>
      <li>Quer tornar o trabalho executado pelo Banco de Alimentos mais eficiente</li>
      <li>Quer aprender mais coisas</li>
    </td>
    <td>
      <li>Ler jornais</li>
      <li>Passar tempo com o marido</li>
      <li>Assistir séries</li>
      <li>Recebeu denuncias sobre beneficiários do Banco de Alimentos que teriam recebido o benefício em locais diferentes</li>
    </td>
  </tr>
</table>



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador       | Alterar permissões e cadastrar novos usuários | Permitir a administração de contas e o controle de usuários |
|Administrador       | Cadastrar locais de entrega da cesta básica                 | Realizar o controle dos locais de envio da cestas básicas |
|Administrador       | Relatório quantidades, saldo de cestas, nº de cestas entregues por localidades, nº de famílias atendidas | Planejar ações com base nos dados gerados e fazer prestação de contas|
|Usuário CRAS | Cadastrar beneficiários e dependentes |Inserir no sistema pessoas aptas ao recebimento do benefício  |
|Usuário CRAS | Alterar cadastro de beneficiários e dependentes | Permitir a atualização/correção de dados do beneficiário |
|Usuário CRAS | Gerar relatório de perfil do solicitante | Permitir o planejamento de ações com base em dados do cadastro|
|Usuário BMA | Lançar fontes e quantidades de alimentos recebidos | Controlar os alimentos recebidos para prestação de contas|
|Usuário BMA | Registrar destinação de alimentos (consumíveis, não consumívies, reciclagem) |Mostrar forma de aproveitamento das doações |
|Usuário BMA | Registrar prazo limite para doação da cesta básica e cesta verde | Realizar o controle da validade dos produtos da cesta para que a doação seja tempestiva |
|Usuário BMA  | Registrar cestas básicas/verdes e pontos para os quais as cestas foram enviadas | Registrar nº de cestas básicas e local de distribuição para prestação de contas |
|Usuário Concedente | Registrar o recebimento da cestas | Realizar o controle das cestas encaminhadas pelo BMA|
|Usuário Concedente | Consultar se beneficiário já recebeu auxílio durante o período de referência | Evitar concessão de cesta básica em duplicidade |
|Usuário Concedente | Registrar o benefício entregue ao beneficiário | Deduzir saldo e deixar registrado que o beneficiário já recebeu o benefício |
|Beneficiário | Consultar data de recebimento do próximo benefício | Evitar deslocamento desnecessário para recebimento de benefício |
|Beneficiário | Consultar locais com cestas disponíveis | Localizar o endereço mais próximo com cestas em estoque |
|Cidadão| Consultar beneficiários e locais datas de recebimento| 	Dar transparência ao trabalho do BMA|
|Cidadão| Quantidade de cestas doadas e quantidade de família atendidas| 	Dar transparência ao trabalho do BMA| 
|Cidadão|	Quantidade de alimentos doados por fonte|	Dar transparência ao trabalho do BMA |

O quadro abaixo apresenta uma breve definição de cada perfil: 

|Perfil| Descrição
|--------------------|------------------------------------|
|Administrador|	Servidor do BMA com grau máximo de visualização e controle do sistema|
|Usuário CRAS|	Empregado/colaborador do CRAS responsável por avaliar os requerimentos de cestas básicas e cestas verdes. A partir do trabalho desse usuário, são definidos os beneficiários aptos a receberem o benefícios |
|Usuário BMA|	Servidor/colaborador vinculado ao BMA que recebe, separa e prepara as cestas básicas e cestas verdes|
|Usuário Concedente| 	Empregado/colaborador responsável por entregar a doação ao beneficiário. Dessa forma, o usuário concedente pode fazer parte do quadro de funcionários do BMA, do CRAS ou de entidades socioassistenciais|  
|Beneficiário| 	Pessoa que recebe a cesta básica ou a cesta verde|
|Cidadão |	Qualquer pessoa que acesse o site para buscar infomações sobre o Banco de Alimentos|





Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir o controle de estoque de cestas básicas| ALTA | 
|RF-002| Permitir a consulta dos baneficiários de cestas dentro de um período| ALTA |
|RF-003| Apresentar prestação de contas das ações do Banco de Alimentos| ALTA |
|RF-004| Cadastrar usuários do sistema| MÉDIA |
|RF-005| Cadastrar beneficiários do Banco de Alimentos| MÉDIA |
|RF-006| Cadastrar instituições responsáveis pelas distribuição de cestas básicas/verdes| MÉDIA |
|RF-007| Registrar a periodicidade de entrega de cada cesta  | BAIXA |
|RF-008| Registrar a quantidade de alimentos doados| ALTA |
|RF-009| Permitir o login no sistema| ALTA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | BAIXA | 
|RNF-003| Para que o sistema seja acessado, é necessário estar conectado a internet| MÉDIA| 
|RNF-004| O sistema deve funcionar em qualquer navegador| MÉDIA| 
|RNF-005| Utilizar um banco de dados para verificar informações de usuários, cestas, beneficiários e instituições| ALTA| 
|RNF-006| O sistema deve exigir autenticação prévia de usuários| MÉDIA| 
|RNF-007| O sistema deve fazer backup a cada 24 horas| MÉDIA| 
|RNF-008| O sistema deve ter boa usuabilidade| MÉDIA| 
|RNF-009| O sistema deve conter mensagens que informem erros de utilização| MÉDIA| 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| As informações de perfil de beneficiário não devem estar disponíveis para todos usuários do sistema|


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
