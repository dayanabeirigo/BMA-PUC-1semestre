# Registro de Testes de Software

<table>
 <thead>
  <tr>
   <th>Caso de Teste</th>
   <th>CT-01 - Cadastro de Instituições</th>
  </tr>
 </thead>
 <tbody>

   <td> Requisitos Associados</td>
   <td> RF-006 - Cadastrar instituições responsáveis pelas distribuição de cestas básicas/verdes <br>
        RF-009 - Permitir o login no sistema <br>
        RNF-005 - Utilizar um banco de dados para verificar informações de usuários, cestas, beneficiários e instituições <br>
   </td>

  <tr>
   <td> Objetivo do Teste</td>
   <td> Verificar se é possível efetuar o cadastro de nova instituição. </td>
  </tr>
 <tr>
   <td> Passos</td>
   <td> 1. Clicar no menu lateral em Instituições<br>
        2. Clicar em “Cadastrar Nova”<br>
        3. Preencher os campos com dados da Instituição<br>
        4. Clicar em salvar
 </td>
  </tr>
     <tr>
   <td> Critérios de Êxito</td>
   <td> A nova instituição deve ser listda quando o usuário efetuar a pesquisa na tela inicial de "Instituições".  </td>
  </tr>
   
   <tr>
   <td> Registros</td>
   <td> <img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-7/blob/main/src/imgs/CT-001.png">     
     <img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-7/blob/main/src/imgs/CT-001A.png"> 
          <img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-7/blob/main/src/imgs/CT-001B.png"> 
     </td>
  </tr>
  
   <td> Pontos Positivos</td>
   <td> PP-001 - A tela insere, de fato, a nova instituição na base de dados do sistema. <br>
PP-002 - A função é de fácil localização no sistema.
  </td>
  </tr>
   
  
   <td> Pontos Fracos</td>
   <td> PF-001 - Ao entrar na tela, ficam disponíveis os botões de Editar e Excluir que não serão utilizados no momento. <br>
PF-002 - Caso o usuário não preencha ou preencha parcialmente os campos, ele consegue inserir os dados no sistema. <br>
PF-003 - Não há mensagem de confirmação sobre o sucesso do cadastro. <br>
PF-004 - O sistema permite o cadastro de instituições com o mesmo nome e CNPJ. <br>
PF-005 - Os caracteres de ponto, traço e parênteses não são inseridos automaticamente em campos como CNPJ, CEP e telefone. <br>
PF-006 - O sistema não é responsivo e não permite a navegação utilizando a tecla TAB.
  </td>
  </tr>
   
      
   <td> Sugestões de Melhorias</td>
   <td> SM-001 Ocultar ou deixar indisponíveis os botões Editar e Excluir. <br>
SM-002/SM-004 - Criar critérios de validação de campos.<br>
SM-003 - Criar modal com confirmação de cadastro.<br>
SM-005 - Criar máscaras para os campos de CNPJ, CEP e telefone. <br>
SM-006 - Tornar o site responsivo e melhorar critérios de navegabilidade.
  </td>
  
   
   </tbody> 

</table>




<table>
 <thead>
  <tr>
   <th>Caso de Teste</th>
   <th>CT-002 - Consulta Instituições</th>
  </tr>
 </thead>
 <tbody>

   <td> Requisitos Associados</td>
   <td> RF-006 - Cadastrar instituições responsáveis pelas distribuição de cestas básicas/verdes <br>
        RF-009 - Permitir o login no sistema <br>
        RNF-005 - Utilizar um banco de dados para verificar informações de usuários, cestas, beneficiários e instituições <br>
   </td>

  <tr>
   <td> Objetivo do Teste</td>
   <td> Efetuar operações simples como consultar instituições, utilizando filtros e acessar dados de uma instituição específica. </td>
  </tr>
 <tr>
   <td> Passos</td>
   <td> 1. Clicar no menu lateral em Instituições<br>
        2. Preencher campos de busca<br>
        3. Clicar em Buscar<br>
        4. Caso seja necessário acessar dados específicos de uma instituição, clicar no nome da instituição
 </td>
  </tr>
     <tr>
   <td> Critérios de Êxito</td>
   <td> Devem ser listados os resultados de pesquisa, conforme os dados e filtros preenchidos pelo usuário <br>
      Caso o usuário clique no nome de uma instituição específica, devem ser apresentados os dados dessa instituição</td>
  </tr>
   

   <td> Registros</td>
   <td> <img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-7/blob/main/src/imgs/CT-002.png"> 
    <img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-7/blob/main/src/imgs/CT-002A.png"> 
    </td>
  </tr>
  
   <td> Pontos Positivos</td>
   <td> PP-001 - A tela realiza de maneira satisfatória a pesquisa da informações, inclusive utilizando mais de um parâmetro de entrada simultaneamente.  <br>
PP-002 - A função é de fácil localização no sistema.<br>
    PP-003 - A pesquisa por nome consegue retornar resultados mesmo utilizando parte do nome, letras maiúsculas ou minúsculas.<br>
    PP-004 - A pesquisa por instituição específica consegue apresentar adequadamente os dados detalhados da instituição escolhida. 
  </td>
  </tr>
   
  
   <td> Pontos Fracos</td>
   <td> PF-001 - Na busca por CNPJ é preciso digitar caracteres , como ponto, traço e barra, para que haja retorno de resultados.  <br>
PF-002 - Ao não encontrar resultados, o sistema mostra o cabeçalho da tabela. <br>
PF-003 - Na tela de detalhamento de uma instiuição, não há botão para retornar para a tela de pesquisa. <br>
 PF-004 - O sistema não é responsivo e não permite a navegação utilizando a tecla TAB. 
  </td>
  </tr>
   
      
   <td> Sugestões de Melhorias</td>
   <td> SM-001 - Criar máscara para o campo de CNPJ. <br>
SM-002 - Criar requisitos de validação dos campos.<br>
SM-003 - Colocar botão para retorno à tela de pesquisa.<br>
 SM-004 - Tornar o site responsivo e melhorar critérios de navegabilidade.<br>
  </td>
  

  
  
  <table>
 <thead>
  <tr>
   <th>Caso de Teste</th>
   <th>CT-003 - Editar e Excluir Instituições</th>
  </tr>
 </thead>
 <tbody>

   <td> Requisitos Associados</td>
   <td> RF-006 - Cadastrar instituições responsáveis pelas distribuição de cestas básicas/verdes <br>
        RF-009 - Permitir o login no sistema <br>
        RNF-005 - Utilizar um banco de dados para verificar informações de usuários, cestas, beneficiários e instituições <br>
   </td>

  <tr>
   <td> Objetivo do Teste</td>
   <td>   Editar e excluir dados de uma determinada Instituição do Banco de Dados</td>
  </tr>
 <tr>
   <td> Passos</td>
   <td> 1. Clicar no menu lateral em Instituições<br>
        2. Preencher campos de busca<br>
        3. Clicar em Buscar<br>
        4. Clicar no nome da instituição que se deseja editar/excluir<br>
    5. Clicar em editar ou excluir
    6. Caso a opção seja editar, clicar em salvar. 
    
 </td>
  </tr>
     <tr>
   <td> Critérios de Êxito</td>
   <td> Os dados devem ser atualizados na base de dados, podendo as alterações serem visualizadas na tela de pesquisas</td>
  </tr>
   

   <td> Registros</td>
   <td> <img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-7/blob/main/src/imgs/CT-003.png"> 
      </td>
  </tr>
  
   <td> Pontos Positivos</td>
   <td> PP-001 - A tela realiza de maneira satisfatória a edição/exclusão de informações.<br>
  </td>
  </tr>
   
  
   <td> Pontos Fracos</td>
   <td> PF-001 - Não aparecem mensagens de confirmação de alteração. <br>
PF-002 - Na edição, não há requisitos de validação dos campos.<br>
PF-003 - Não há botão para retornar para a tela de pesquisa. <br>
 PF-004 - O sistema não é responsivo e não permite a navegação utilizando a tecla TAB. 
  PF-005 - O botão salvar deve ser habilitado somente se o botão editar houver sido acionado. 
  </td>
  </tr>
   
      
   <td> Sugestões de Melhorias</td>
   <td> SM-001 - Criar modal de confirmação. <br>
SM-002 - Retirar o cabelho da tabela quando não há resultados.<br>
SM-003 - Colocar botão para retorno à tela de pesquisa.<br>
 SM-004 - Tornar o site responsivo e melhorar critérios de navegabilidade.<br>
 SM-005 - Habilitar botão salvar depois do clique em editar. 
  </td>
   
   </tbody> 

</table>



