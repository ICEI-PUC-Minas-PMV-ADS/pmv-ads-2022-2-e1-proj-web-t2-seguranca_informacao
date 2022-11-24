# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência.

## 1. Teste suas senhas (RF-02, RF-04 e RF-06)

<img scale=1 src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/main/docs/img/Template_teste_senhas_nova.png"/>  

[URL da tela](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/src/pages/analiseSenhas.html)

Apresenta áreas de input para que o usuário possa inserir alguns dados pessoais (opcional) e outro input para inserção de senhas criadas previamente.  
O nível de segurança da senha será exibido em tela, sendo: fraca, média ou forte.  
Quando a senha for considerada de qualidade fraca ou média, aparecerá um quadro sugerindo para que o usuário realize a troca dela.

### 1.1 Requisitos atendidos:
* RF-02
* RF-04
* RF-06  

### 1.2 Artefatos da funcionalidade:

* analiseSenhas.html
* analise-senha.css
* validar_senha.js  
* verificar_rainbow_table.js  
* rainbow_table.js    

<br/>

## 2. Crie Senhas Seguras (RF-03 e RF-06)  

<img scale=1 src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/main/docs/img/template_outras_nova.png"/>  

[URL da tela](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/src/pages/geradorSenhas.html)

O usuário pode selecionar os tipos de caracteres que deseja incluir nas senhas, como números, letras maiúsculas ou minúsculas e caracteres especiais.  
Também é possível definir o tamanho da senha, de 8 a 32 caracteres.  

### 2.1 Requisitos atendidos:
* RF-03
* RF-06

### 2.2 Artefatos da funcionalidade:

* geradorSenhas.html
* gerador-senha.css
* geradorSenha.js  

<br/>  

## 3. Saiba mais sobre segurança da informação (RF-05 e RF-06)  

<img scale=1 src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/main/docs/img/Template_informacoes_nova.png"/>  

[URL da tela](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/src/pages/informacoesIndex.html)

A tela exibe algumas informações com o intuito de orientar sobre a importância de se utilizar senhas fortes, além de outras informações gerais sobre segurança da informação.  

### 3.1 Requisitos atendidos:
* RF-05  
* RF-06  

### 3.2 Artefatos da funcionalidade:

* informacoesIndex.html
* informacoesIndex.css

### 3.3 Páginas derivadas:

* informacao1.html
* informacao2.html
* informacao3.html
* informacao4.html
* informacao5.html
* informacao6.html
* informacao7.html
* informacao8.html
* informacao9.html
* informacoes.css
 
 ## 4. Quiz (RF-06 e RF-07)  

 <img scale=1 src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/blob/main/docs/img/Template_quiz.png?raw=true"/>  

[URL da tela](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/src/pages/quiz.html)

São apresentadas 15 questões ao usuário, sendo elas distribuídas em diversos assuntos relacionados à segurança da informação.  
 Deve-se escolher uma das duas opções de resposta: verdadeiro ou falso.  
 Ao marcar uma das alternativas, o usuário deve clicar no botão "Próxima" para prosseguir no quiz.  
 Caso não seja selecionada uma das duas opções de respostas, o sistema irá considerar a alternativa como falsa.  
 Ao finalizar o quiz, será apresentada a quantidade de respostas corretas dentre as 15 perguntas existentes, bem como os erros e acertos do usuário.  

 <img scale=1 src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/blob/main/docs/img/Template_quiz_resultado.png?raw=true"/>  

 No final dessa tela, aparecerá um link chamado de `Quero saber os detalhes das questões apresentadas`, que abrirá uma nova tela para mostrar comentários sobre todas as questões apresentadas no quiz.  

  <img scale=1 src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/blob/main/docs/img/Template_quiz_gabarito.png?raw=true"/>  

### 4.1 Requisitos atendidos:
* RF-06  
* RF-07  

### 4.2 Artefatos da funcionalidade:

* quiz.html
* detalhesQuestoes.html
* quiz.css
* detalhesQuestoes.css
* quiz.js

## 5. Página inicial contendo link direto para cada um dos serviços apresendados na aplicação (RF-01)  

<img scale=1 src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/blob/main/docs/img/Template_home_nova.PNG?raw=true"/>  

[URL da tela](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/)

A tela de home-page apresenta quatro opções de interações para o usuário:

* Teste suas senhas: permite ao usuário verificar o nível de segurança da sua senha.  

* Criar senha segura: auxilia o usuário a criar senhas mais seguras.  

* Mais sobre a segurança da informação: fornece ao usuário informações diversas sobre segurança da informação.  

* Quiz  

### 2.1 Requisitos atendidos:
* RF-01

### 2.2 Artefatos da funcionalidade:

* index.html
* index.css