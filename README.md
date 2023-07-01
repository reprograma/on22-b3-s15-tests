# on22-b3-s15-tests
## Automação de testes
## Agnes Ignácio

![bjork gritah](https://media2.giphy.com/media/Y34WZTAOYGzoAI7fsB/giphy.gif?cid=ecf05e47ykhowxk4jtjrd1x9k8tftfwo1f689q36a5v14ang&ep=v1_gifs_search&rid=giphy.gif&ct=g)
<br><br>
Oie minhas xeirosasss <3
Eu sou a prof Agnes Ignácio e hoje a gente uma porção de coisas sobre testes, saca só:
<br>
* O que é testar?
  <br><br>
  Testar um software é o processo de avaliar e verificar se um produto ou aplicação faz o que deveria fazer.
  Os benefícios de testar incluem prevenir bugs, reduzir os custos do desenvolvimento e melhorar a performance.
  Em geral, os testes fazem parte do cotidiano do desenvolvimento nas maiores empresas de tecnologia do mercado,
  por isso é importante que tenhamos esse contexto e conhecimento como um diferencial na hora de colocar o seu
  curriculo para jogo e tentar uma vaga.
  <br><br>
* Por que é importante testar?
  <br><br>
  Quando testamos, garantimos que estamos entregando um software de qualidade, aumentamos a segurança de suas
  funcionalidades, ganhamos contexto da eficácia do seu desenvolvimento e, de quebra, também geramos uma
  documentação viva, descrevendo o que cada parte do programa faz; 
  <br><br>
* O que é cultura de testes?
  <br><br>
  Dentro do contexto de desenvolvimento, cultura se refere a práticas, visões de mundo e formas de organizar
  os processos numa empresa, grupo ou qualquer outro tipo de colaboração. Quando falamos de uma cultura de tes-
  tes, estamos falando de uma visão do desenvolvimento que compreende a importância de testar o que se desenvol-
  encarando isso com seriedade suficiente para dedicar recursos, tempo e estudos em direção ao tema. Em geral,
  empresas que se propõem a cultivar uma cultura de testes tendem a colher os frutos disso a longo prazo na qua-
  lidade de seus produtos.
  <br><br>
* Quais são os principais tipos de teste?
  <br><br>
  Existem vários, mas em geral vamos entrar em contato com três tipos mais comuns: End-2-End, testes de integração
  E testes unitários. Os testes E2E são testes bastante caros que vão testar a aplicação de cabo a rabo: desde
  o que está sendo recebido de outras aplicações, o back-end e o front-end. São complexos e demandam um planejamen-
  to bastante profundo para que não se desperdice o tempo e recursos investidos. Os testes de integração vão testar
  comportamentos que são mais comuns entre os usuários, a interação entre cada funcionalidade e suas variações de uso.
  Não são baratos, mas ainda são mais em conta que testes E2E. Os testes unitários testam funcionalidades isoladas e
  idealmente estão presentes no momento de desenvolvimento em si. São baratos pois podem ser feitos pelos próprios
  desenvolvedores com bastante agilidade.
  <br><br>
* O que é a pirâmide de testes?
  <br><br>
  ![bjork gritah](https://blog.onedaytesting.com.br/wp-content/uploads/2021/08/unnamed.png)
  <br><br>
  Em metodologia ágil, se fala muito sobre a estrutura de pirâmide na hora de planejar o panorama de testes de uma
  aplicação. Na base, ou seja, em maior quantidade, temos os testes unitários, mais baratos e fáceis de fazer. Na camada
  do meio, temos os testes de integração, um pouco mais caros mas ainda importantes de se ter em uma quantidade significativa.
  No topo, o que também significa em menor quantidade, temos os testes E2E, pelo seu preço e complexidade de elaboração.
  <br><br>
* O que é Test-Driven Development (TDD)?
  <br><br>
  É uma maneira de se pensar o desenvolvimento de software centrada nos testes. Nesse método, utilizamos um ciclo chamado
  Red - Green - Blue, onde a primeira coisa que fazemos é criar o teste, esperando que ele falhe (estágio red), depois pro-
  curamos a implementação mais simples possível para fazer com que ele passe (estágio green), e, após o sucesso do teste,
  revisamos o código em busca de melhorias e aperfeiçoamentos a partir de práticas de cógigo limpo, processo conhecido como
  refatoração (estágio blue); depois de passarmos pelos três estágios, reiniciamos o ciclo produzindo um novo teste, e assim
  se desenrola o processo de desenvolvimento.
  Em geral, usar TDD adiciona mais atenção ao processo de desenvolvimento, o que consequentemente leva mais tempo e gera mais
  complexidade a curto prazo. Porém, através dele, nos certificamos de que tudo o que é produzido no código está sendo testado,
  o que é a prova de uma rede de segurança quanto a qualidade. Além disso, também produzimos uma documentação bastante pre-
  cisa da aplicação, que pode ser consultada para se inteirar da funcionalidades dela.
  <br><br>
* Que tipo de testes faremos essa semana?
  <br><br>
  Nessa semana introdutória, faremos testes unitários simples testando as schemas de uma API já pronta e disponível no repo-
  sitório com a ferramenta JEST. Além disso, desenharemos um esqueleto de como seria testar rotas nesse contexto. A API
  é o meu projeto final da reprograma na ON16, o que também pode servir de referência para vocês mais pra frente. Apesar da
  ideia ser fazer testes bastante simples, espero que a gente consiga pegar o contexto da ferramenta pra que eventualmente
  vocês desenvolvam testes mais complexos.
  <br><br>
* Qual é a tarefa de casa?
  <br><br>
  Na API disponível nesse repositório, temos dois arquivos de testes, um para schemas de timelines e outro para schemas de
  memórias. Depois que fizemos os testes para as schemas de timelines na aula, os testes para as schemas de memórias ficam
  por conta de vocês. A ideia é fazer uma sessão 'describe' para cada uma das letras do CRUD, ok?


É isso, gurias <3 espero que tenha sido uma aula proveitosa e que as animem pra mergulhar nesse mundo vasto e divertido
de testes! Um xeroooo :3
