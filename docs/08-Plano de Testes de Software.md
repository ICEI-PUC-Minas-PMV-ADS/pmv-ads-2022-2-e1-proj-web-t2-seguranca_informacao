# Plano de Testes de Software
Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|     Caso de teste     | T-01 - Formulário com informações                                                                              |
| :-------------------: | :------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-03 - Formulário com informações básicas do usuário (nome, data de nascimento, telefone) .                   |
|   Objetivo do Teste   | Verificar funcionalidade do formulário que trabalha em conjunto com a aplicação de avaliação de senhas.        |
|        Passos         | 1) Abrir o navegador <br> 2) Informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/ <br> 3) Acessar a área de "Teste suas senhas" <br> 4) Informar os dados solicitados no formulário.                                       |
|  Critérios de Êxito   | O formulário receber os dados informados pelo usuário afim de proporcionar uma avaliação da senha mais eficaz. |

|     Caso de teste     | T-02 - Avaliação de senhas                                                                    |
| :-------------------: | :-------------------------------------------------------------------------------------------  |
| Requisitos Associados | RF-01 -	Avaliar a qualidade das senhas informadas pelos usuários.                             |
|   Objetivo do Teste   | Verificar se a aplicação faz a avaliação de força correta, da senha informada pelo usuário.   | 
|        Passos         | 1) Abrir o navegador <br> 2) Informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/ <br> 3) Acessar a área de "Teste suas senhas" <br> 4) Informar os dados básicos (opcional) <br> 5) Digitar a sua senha       |
|  Critérios de Êxito   | O usuário deve receber uma avaliação sobre a força de sua senha.                              |

|     Caso de teste     | T-03 - Gerador de senhas                                                   |
| :-------------------: | :------------------------------------------------------------------------- |
| Requisitos Associados | RF-02 - Criar senhas seguras para os usuários.                             |
|   Objetivo do Teste   | Verificar se o gerador de senhas funciona corretamente.                    |
|        Passos         | 1) Abrir o navegador <br> 2) Informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/ <br> 3) Acessar a área de "Criar senha segura" <br> 4) Utilizar o gerador de senhas com todas as suas ferramentas (nº de caracteres, caracteres especiais, números e letras maíusculas).                                                                                  |
|  Critérios de Êxito   | As senhas geradas devem atender as opções que foram marcadas pelo usuário. |

|     Caso de teste     | T-04 - Portal de notícias                                                                                         |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-04 - Disponibilizar informações sobre a segurança da informação e os riscos existentes ao utilizar a internet. | 
|   Objetivo do Teste   | Verificar a navegabilidade entre as páginas e o acesso correto em cada página de notícia.                         |
|        Passos         | 1) Abrir o navegador <br> 2) Informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/ <br> 3) Acessar a área de "Mais sobre segurança da informação" <br> 4) Acessar cada uma das notícias disponíveis.                                |
|  Critérios de Êxito   | Ao acessar o card da notícia, o usuário deverá ser levado à página correta.                                       |

|     Caso de teste     | T-05 - Vazamento de senhas                                                                                            |
| :-------------------: | :-------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 - Informar se a senha do usuário foi vazada.                                                                    |
|   Objetivo do Teste   | Verificar se a aplicação informa corretamente ao usuário que senhas do mesmo padrão que a informada já foram vazadas. |
|        Passos         | 1) Abrir o navegador <br> 2) Informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-seguranca_informacao/ <br> 3) Acessar a área de "Teste suas senhas" <br> 4) Repetir o processo de análise de senha.                                                   |
|  Critérios de Êxito   | Após fazer a análise da senha, a informação irá aparecer na tela.                                                     |
