# Plano de Testes de Software





<table>
 <thead>
  <tr>
   <th>Caso de Teste</th>
   <th>Consulta de Instituições</th>
  </tr>
 </thead>

 <tbody>
  <tr>
   <td> Requisitos Associados</td>
   <td> Login prévio, cadastro prévio de instituições na localStorage e tela de consulta de instituições</td>
  </tr>
  
   <tr>
   <td> Objetivo do Teste</td>
   <td> Consultar, editar e excluir as instituições responsáveis pela distribuição de alimentos</td>
  </tr>
  
   <tr>
   <td> Passos</td>
   <td> 1) Clicar em "Instituições" no menu lateral do sistema. <br>
    2) Realizar a pesquisa das instituições, podendo ser executada das seguintes forma: a) nada é preenchido e com o clique em "pesquisar" devem aparecer todas as instituições já cadastradas no sistema. b) são preenchidos os parâmetros de nome, cnpj, situação e/ou tipo de instiuição e é clicado em "pesquisar". O preenchimento dos parâmentros não é obrigatório para realização da pesquisa.<br>
    3) Caso queria ver informações mais detalhas de uma determinada instituição, o usuário deve clicar no nome que aparece no resultado e será redirecionado para outra tela.<br>
    4) Na tela com dados mais específicos, o usuário pode ser capaz de fazer a edição dos dados clicando em "Editar" ou a exclusão da instiuição clicando em "excluir". <br>
    5) O usuário deve preencher os dados que deseja alterar e clicar em "Salvar".  </td>
  </tr>
  
   <tr>
   <td> Critérios de Êxito</td>
   <td> Devem aparecer como resultado da pesquisa informações das instituições como nome, cnpj, situação, endereço e funcionamento. Deve ser possível ao usuário a utilização de filtros e/ou pesquisas detalhadas por nome e cnpj. Deve ser possível a atualização dos dados de uma determinada instituição na base de dados.  </td>
  </tr>
   </tbody>

</table>



<table>
 <thead>
  <tr>
   <th>Caso de Teste</th>
   <th>Cadastro de Instituições</th>
  </tr>
 </thead>

 <tbody>
  <tr>
   <td> Requisitos Associados</td>
   <td> Login prévio, cadastro prévio de instituições na localStorage, tela de consulta e tela de cadastro de instituições</td>
  </tr>
  
   <tr>
   <td> Objetivo do Teste</td>
   <td> Cadastrar as instituições responsáveis pela distribuição de alimentos</td>
  </tr>
  
   <tr>
   <td> Passos</td>
   <td> 1) Clicar em "Instituições" no menu lateral do sistema. <br>
    2) Clicar em "Cadastrar Nova". <br>
    3) Preencher dados da instituição na tela. Clicar em "Salvar" </td>
  </tr>
  
   <tr>
   <td> Critérios de Êxito</td>
   <td> Uma nova instituição deve ser incluída na base de dados. </td>
  </tr>
   </tbody>

</table>



