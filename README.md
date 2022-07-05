# Organiz 

![Licença](https://img.shields.io/badge/Licence-MIT-green) ![Versão](https://img.shields.io/badge/dynamic/json?color=blue&label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fprojetos-de-software%2Forganizer%2Fmain%2Fpackage.json)

## Introdução

Esse repositório refere-se a um organizador de repositórios GIT para diversos modelos de projetos. Isso significa que os arquivos, pastas já estarão num padrão para que você possa organizá-los de maneira eficiente para facilitar a comunicação e o desenvolvimento de novos projetos.

### Descrição

O organiz foi criado para gerar um template básico em repositórios git inicialmente com as seguintes premissas: 

1. Changelog
2. Commit Semântico
3. Versionamento Semântico

Para entender melhor você pode consultar o [Manual do Usuário](docs/publish/Utilização.md)

## Instalação

Há alguns pré-requisitos do software: 

1. NodeJs > 16

Você pode ou não utilizar o [Yarn](https://yarnpkg.com/). Caso o software não detecte o yarn instalado ele utilizará o NPM como gerenciador de pacotes.

Para instalar digite o comando abaixo: 

```bash
npm install -g organiz
```

## Utilização

Inicalmente implementei a parte de inicialização. O diretório deve estar inicializado com o repositório git, caso contrário o programa não instalará as dependências. Para utilizar digite o comando abaixo:

```bash
organiz init
```

Consulte o [manual do usuário](docs/publish/Utilização.md) para mais detalhes.

## Documentos

Você pode acessar os documentos abaixo para entender um pouco melhor dos recursos:

| Número |                                   Descrição                                   | Status |
| :----: | :---------------------------------------------------------------------------: | :----: |
|   01   | [Versionamento Semântico](docs/publish/01%20-%20Versionamento%20Semântico.md) | Criado |
|   02   |                [Changelog](docs/publish/03%20-%20Changelog.md)                | Criado |
|   03   |   [Commits Convencionais](docs/publish/02%20-%20Commit%20Convencionais.md)    | Criado |
|   04   |                [Manual de Usuário](docs/publish/Utilização.md)                | Criado |
