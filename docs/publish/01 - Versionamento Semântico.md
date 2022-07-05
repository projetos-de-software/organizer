# Versionamento Semântico

## Introdução

Este documento tem como objetivo explicar o que é o versionamento semântico.

## Descrição

O [Versionamento Semântico](https://semver.org/lang/pt-BR/) é um conujunto de convênções para efetuar versionamento de software. Segundo o site do https://semver.org/lang/pt-BR/ , à medida que o software cresce há um problema com o gerenciamento de dependências do software, que é comunmente chamado de "inferno das dependências". Isso porque se não há nenhum versionamento do software em relação ao desenvolvimento, há uma limitação de uso por parte de terceiros. Criou-se a convenção para que esse problema fosse resolvido.

O versionamento semântico funciona basicamente como o descrito abaixo:


X.Y.Z 

onde: 

X - Versão Maior

Y - Versão Menor

Z - Correção

As variáveis X.Y.Z são inteiros não negativos. Além disso, não devem conter zeros à esquerda. 

Depois que um pacote for versionado/lançado(released) ele não deve mudar. Qualquer modificação deve ser adicionada em uma nova versão. 

Uma versão de correção de bugs (variável Z) deve ser incrementada apenas se mantiver compatibilidade e corrigir bugs. 

Uma versão menor (variável Y) deve ser incrementada apenas se uma funcionalidade nova for compatível com a versão atual. 

Uma versão maior (variável Z) deve ser incrementada apenas se uma funcionalidade nova for incompatível com a versão atual. 

Há mais detalhes no site do [versionamento semântico](https://semver.org/lang/pt-BR/).

## Por que utilizar versionamento semântico? 

"Esta não é uma ideia nova ou revolucionária. De fato, você provavelmente já faz algo próximo a isso. O problema é que “próximo” não é bom o bastante. Sem a aderência a algum tipo de especificação formal, os números de versão são essencialmente inúteis para gerenciamento de dependências. Dando um nome e definições claras às ideias acima, fica fácil comunicar suas intenções aos usuários de seu software. Uma vez que estas intenções estão claras, especificações de dependências flexíveis (mas não tão flexíveis) finalmente podem ser feitas."

## Como isso está relacionado ao organiz?

Um dos padrões de projetos que adotamos é o do versionamento semântico. O [organiz](https://github.com/projetos-de-software/organizer) utiliza o pacote NPM do Standard Version para criar o versionamento do projeto. Isso além de uma boa prática, facilita a organização do repositório.

## Revisão

| Numero |        Descrição        |        Revisor        |    Data     |
| :----: | :---------------------: | :-------------------: | :---------: |
|   01   | Versionamento Semântico | Marcos de Lima Carlos | 02-Jul-2022 |

Caso você encontre um erro neste documento ou queira deixar uma sugestão, por favor abra uma issue no repositório [organiz](https://github.com/projetos-de-software/organizer)
