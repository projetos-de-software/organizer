# Commit Convencionais

## Introdução

Este documento tem como objetivo explicar a questão dos commits convencionais. 

## Descrição

Os [commits convencionais](https://www.conventionalcommits.org/pt-br/v1.0.0/) é uma convenção simples para as mensagens de commit. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. A mensagem de commit deverá ser estruturada da seguinte forma: 


```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

O commit contêm os seguintes elementos estruturais para comunicar as pessoas que utilizam o código:

1. **fix:** - mensagem que soluciona uma correção de bugs.
2. **feat:** - mensagem de implementação de funcionalidade.
3. **BREAKING CHANGE** - mensagem que indica que a versão lançada não é compatível com a versão anterior. 


## Mensagens de Commits

Há alguns tipos de mensagens definidas no escopo dos commits convencionais. Vamos colocar as especificações abaixo: 

1. **fix:** - essa tag indica que um bug foi corrigido. 
2. **feat** - implementação de uma nova funcionalidade. 
3. **chore** -  indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
4. **docs** - modificação na documentação do projeto.
5. **tests** - adição de testes no projeto
6. **style** - empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.
7. **refactor** - usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema.
8. **build** -  utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
9. **perf** - indica uma alteração que melhorou a performance do sistema.
10. **ci** -  utilizada para mudanças nos arquivos de configuração de CI.
11. **revert** - indica a reverão de um commit anterior.


Esses são os padrões especificados pelos commits convencionais. 

## Commits Convencionais no Organiz

Os commits convencionais são ativados ao fazer o init no organiz. Eles são feitos da seguinte forma: 

1. A biblioteca [@commitlint](https://github.com/conventional-changelog/commitlint) provê a validação das mensagens e o escopo citado na seção anterior.
2. A biblioteca [husky](https://www.npmjs.com/package/husky) provê o trigger para ativação no comando de commit do git. 
3. A biblioteca [commitzen](https://www.npmjs.com/package/commitizen) provê uma linha de comando interativa para utilização dos comandos citados. 


