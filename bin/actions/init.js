/**
 * Init Action
 * @author Marcos de Lima Carlos
 * @version 1.0
 */

// Dependências

const prompts = require('prompts');
const fs = require('fs');
let language = require('../lang/en.json');
const { exec, execSync } = require('child_process');


/**
 * Init a repo with ask config
 */
function init(){
    // função que checa a existência de um repositório git
    checkGit().then((result)=> {
        // função que retorna as questões
        dadosInit(result).then((question) =>{
            // implementação dos comandos
            const comandos = executaComando(question);
            // se a opção de docs estiver habilitada
            if(question.docs){
               createDirs();
            }

            console.log(language.init.FinishInitProcess);

        });
    });   
}


/**
 * Checa se o usuário está em um repositório GIT.
 */
async function checkGit(){
    // diretório referente a um repositório git
    const dir = './.git';

    if (fs.existsSync(dir)) {
        return true;
    } else {
        // pergunta ao usuário se ele deseja instalar o git
        // caso contrário ele sai.        
            const response = await prompts({
              type: 'confirm',
              name: 'value',
              message: language.init.gitRepo,
            });          
            if(!response.value){
                // mostra a mensagem de saida 
                console.log(language.init.gitExitMessage);
                // sai do sistema
                process.exit(0);
            }else{
                let gitInit = 'git init';
                execSync(gitInit, (err, stdout, stderr) => {
                    if(err){
                        // erro na execução do comando
                        console.log(language.init.gitInitErrorMessage);
                        process.exit(1);
                    }
                });
                return true;
            }
    }
}

/**
 * Utilização de dados do init
 */
function dadosInit(gitStatus){
    if(!gitStatus){
        console.log(language.init.gitInitErrorMessage);
        process.exit(1);
    }else{
        
        let questoes = [
            {
                type: 'text',
                name: 'name',
                message: language.init.questionName,
                initial: 'projectExample'
            },
            {
                type: 'text',
                name: 'version',
                message: language.init.questionVersion,
                initial: '0.1.0'
            },
            {
                type: 'confirm',
                name: 'docs',
                message: language.init.questionDirs,
                initial: false
            }
        ];
        const response = prompts(questoes);
        return response;    
    }
}


/**
 * Função que executa o comando
 * a partir de uma instrução dada
 */
function executaComando(quest){
    // comando de inicialização do repositório 
    let repoInit = 'npm init -y';
    // executa o comando de init repo
    execSync(repoInit, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorNpmInit);
            process.exit(1);            
        }
    });

    let firstInstall = 'npm install husky @commitlint/config-conventional @commitlint/cli --save-dev';
    // executa o comando acima
    execSync(firstInstall, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorNpmInit);
            process.exit(1);
        }

    });
   
    
    // escrever o arquivo de commitlint
    fs.writeFile('commitlint.config.cjs', "module.exports = { extends: ['@commitlint/config-conventional'] };", function(err){
        if(err){
            return console.log(err);
        }
    });
    
    // instala o husky no repositório (NPX)
    let huskyInstall = 'npx husky install';
    execSync(huskyInstall, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorNpmInit);
            process.exit(1);

        }
    });

    
    // adiciona o trigger de commit (NPX)
    let huskyAdd = "npx husky add .husky/commit-msg 'npx commitlint --edit $1'";
    execSync(huskyAdd, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorNpmInit);
            process.exit(1);
        }
    });

    // Dispara o cz caso o usuário tente utilizar somente o commit (NPX)
    let huskyPreCommit = "npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'";
    execSync(huskyPreCommit, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorNpmInit);
            process.exit(1);
        }
    });

    // instala o standard version e o commitizen
    let commitizen = 'npm install commitizen standard-version --save-dev';
    // executa o comando acima
    execSync(commitizen, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorNpmInit);
            process.exit(1);
        }
    });

    // configura o commitzen para utilizar os commits convencionais (NPX)
    let commitizenConfig = 'npx commitizen init cz-conventional-changelog --save-dev --save-exact';
    // executa o comando acima
    execSync(commitizenConfig, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorNpmInit);
            process.exit(1);
        }
    });

    // escrever o .gitignore
    fs.writeFile('.gitignore', "node_modules", 'utf-8',function(err){
        if(err){
            return console.log(err);
        }
    });
    
    
    // Escrever o arquivo versionrc
    const versionrc = {
        "types": [
            { "type": "feat", "section": "Features" },
            { "type": "fix", "section": "Bug Fix" },
            { "type": "chore", "hidden": true },
            { "type": "docs", "hidden": true },
            { "type": "style", "hidden": true },
            { "type": "refactor", "hidden": true },
            { "type": "perf", "hidden": true },
            { "type": "test", "hidden": true },
            { "type": "build", "hidden": true }
          ] 
        };
    // escreve o arquivo versionrc
    fs.writeFile('.versionrc', JSON.stringify(versionrc, null, 4), function(err){
        if(err){
           return console.log(err);
        }
    });
    

    let rawdata = fs.readFileSync('./package.json');
    let packageJSON = JSON.parse(rawdata);

    // atribui ao package.json as informações do projeto
    packageJSON.name = quest.name;
    packageJSON.version = quest.version;
    
    // Add scripts
    let scripts = {
            "test": "echo \"Error: no test specified\" && exit 1",
            "prepare": "husky install",
            "commit": "git-cz",
            "release": "standard-version"
        };
        

    packageJSON.scripts = scripts;
    
    // escreve o package.json
    fs.writeFile('package.json', JSON.stringify(packageJSON, null, 4),function(err){
        if(err){
           return console.log(err);
        }
    });
}

/**
 * Função para criação de diretórios
 */
function createDirs(){
    const createFolders = 'mkdir -p docs/{backlog,archive,sprint,publish,img}';
    // executa o comando acima
    execSync(createFolders, (err, stdout, stderr) =>{
        if(err){
            console.log(language.init.ErrorFolders);
            process.exit(1);
        }
    });
}

module.exports = {init};