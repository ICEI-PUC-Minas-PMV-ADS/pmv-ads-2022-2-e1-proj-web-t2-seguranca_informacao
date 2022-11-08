# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|     Caso de teste     | T-01 - Avaliação de senhas                                                                    |
| :-------------------: | :-------------------------------------------------------------------------------------------  |
| Requisitos Associados | RF-01 -	Avaliar a qualidade das senhas informadas pelos usuários.                             |
|   Objetivo do Teste   | Verificar se a aplicação faz a avaliação de força correta, da senha informada pelo usuário.   | 
|        Passos         | 1) Abrir o navegador <br> 2) Informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/ <br> 3) Acessar a área de "Teste suas senhas" <br> 4) Informar os dados básicos (opcional) <br> 5) Digitar a sua senha       |
|  Critérios de Êxito   | O usuário deve receber uma avaliação sobre a força de sua senha.                              |

|     Caso de teste     | T-02 - Gerador de senhas                                                   |
| :-------------------: | :------------------------------------------------------------------------- |
| Requisitos Associados | RF-02 - Criar senhas seguras para os usuários.                             |
|   Objetivo do Teste   | Verificar se o gerador de senhas funciona corretamente.                    |
|        Passos         | 1) Abrir o navegador <br> 2) Informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/ <br> 3) Acessar a área de "Criar senha segura" <br> 4) Utilizar o gerador de senhas com todas as suas ferramentas (nº de caracteres, caracteres especiais, números e letras maíusculas)                                                                                          |
|  Critérios de Êxito   | As senhas geradas devem atender as opções que foram marcadas pelo usuário. |
