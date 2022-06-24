# História Sprint 01 - Inicial

## Inicio do projeto

O projetos de software deseja efetuar um esquema de modelos de instalação de software para que o repositório já venha com todos os esquemas iniciais de desenvolvimento de projeto. Isso se deve ao tempo necessário para subir as ferramentas em cada projeto.

Decidi então fazer esse projeto em [NodeJS](https://nodejs.org/en/) visto que todas as ferramentas utilizadas no projeto utiliza essa tecnologia. A questão é que elas não se limitam a ela, podendo ser extendida a outras linguagens e não gerando problemas posteriores no projeto. 

Para instalar o software é necessário instalar o nodejs acima da versão 16. Usa-se o comando abaixo: 

```bash
sudo npm install -g organizer
```

Na minha primeira concepção o ideal é que a ferramenta fizesse o seguinte comando para iniciar: 

```bash
organizer init 
```

O que é necessário criar no começo?

A primeira coisa que será desenvolvida é a função init:

```plantuml
@startuml
start
:Pergunta os dados do projetos; 
:Cria arquivo package.json do projeto(yarn init); 
:instala e cria as configurações do husky;
:instala e configura o commmitzen; 
:instala e configura o standard version;
stop
@enduml
```

- **Dados do Projeto**
  - Nome do Projeto (package.json)
  - Versão
  
## Tasks

| Numero | Descrição | Status |
| :----: | :-------: | :----: |
|   01   |           |        |



