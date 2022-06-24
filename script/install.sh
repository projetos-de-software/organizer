#!/bin/sh

###########################################################
#
#   Script Inicial para novos repositórios
#   @author Marcos de Lima Carlos <mlimacarlos@gmail.com>
#   @version 1.0
#
###########################################################

checarComandos(){
    if ! command -v node &> /dev/null
     then 
        echo "O NodeJS não está instalado no sitema"
        exit
    fi

    if ! command -v yarn &> /dev/null
     then
        echo "O Yarn não está instalado no sistema"
        exit
    fi

}

checarVersoes(){
   node="$(node --version | cut -c2-)"
   version_greater "$node" 10 || die "Versão do NodeJS precisa ser maior que 10"
}

version_greater(){
    printf '%s\n%s\n' "$2" "$1" | sort --check=quiet --version-sort
}

die() { echo "$*" 1>&2 ; exit 1; }

#########

checarComandos
checarVersoes

# Yarn para iniciar um repositório respondendo tudo como default
yarn init -y 

# Instalando e configurando o commitlint
yarn add @commitlint/config-conventional @commitlint/cli -D

# Configuração do arquivo do commitlint
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

# instalando Husky v6
yarn add husky -D

# ativando os hooks
yarn husky install

## Função que adiciona a linha script no package.json
echo $(jq '. += {"scripts":{}}' package.json) > package.json
echo $(jq '.scripts +={"prepare":"husky install"}' package.json) > package.json

# Add hook que vai disparar o commitlint
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'

# Instalando o commitizen
yarn add commitizen -D

# Criando a configuração
yarn commitizen init cz-conventional-changelog --yarn --dev --exact

# Adiciona a linha na parte de script
echo $(jq '.scripts +={"commit":"git-cz"}' package.json) > package.json

# Instalando o standard version
yarn add standard-version  --dev

# Adicionando o release no package.json
echo $(jq '.scripts +={"release":"standard-version"}' package.json) > package.json


##  Escrevendo o versionrc
cat <<EOF > .versionrc
{
  "types": [
    { "type": "feat", "section": "Features" },
    { "type": "fix", "section": "Bug Fixes" },
    { "type": "chore", "hidden": true },
    { "type": "docs", "hidden": true },
    { "type": "style", "hidden": true },
    { "type": "refactor", "hidden": true },
    { "type": "perf", "hidden": true },
    { "type": "test", "hidden": true },
    { "type": "build", "hidden": true }
  ] 
}
EOF

# Escrevendo o .gitignore
cat <<EOF > .gitignore
node_modules
EOF


## Mensagens finais 
echo ""
echo "Pronto! Vc já pode utilizar o modelo de desenvolvimento!"
echo "Para mais informações acesse: https://github.com/projetos-de-software/modelo"
echo ""