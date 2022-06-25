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
:checa a versão do nodejs;
if (versão ok?) then (sim)
  if (yarn?) then (sim)
    :instala o yarn;
  else (não)
    :utiliza o npm; 
  endif

  :Pergunta os dados do projetos; 
  :Cria arquivo package.json do projeto(yarn init); 
  :instala e cria as configurações do husky;
  :instala e configura o commmitzen; 
  :instala e configura o standard version;

else (não)
stop
endif

: oferece ao usuário opções;


stop
@enduml
```

- **Dados do Projeto**
  - Nome do Projeto (package.json)
  - Versão

- **Opções**
  - Pasta de Documentos para Sprint
    - docs
      - backlog
      - archive
      - sprints
      - img

## Tasks

| Numero |                 Descrição                  | Status |
| :----: | :----------------------------------------: | :----: |
|   01   |        Testar a Biblioteca Command         | aberto |
|   02   |        Testar a Biblioteca Prompts         | aberto |
|   03   | Escrever arquivos JSON a partir de objetos | aberto |
|   04   |    entender sobre importação e módulos     | aberto |

### Tasks parte II

| Numero |                 Descrição                  | Status |
| :----: | :----------------------------------------: | :----: |


