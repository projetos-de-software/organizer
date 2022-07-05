#!/usr/bin/env node

/**
 * https://github.com/tj/commander.js
 * Used library for parse command
 */

 const { Command } = require('commander');
 const acao  = require("./actions/init");
 const program = new Command();
 const semver = require('semver');

 /**
 * Check nodejs version
 */
function checkVersion(){
    // pega a versão do node   
    const versao = process.versions.node;

    if(!semver.gt(versao,'14.0.0')){
       console.log(language.nodeVersion);
       process.exit(1);
    }

}

// importar JSON language
var language = require('./lang/en.json');
var package = require('../package.json');

checkVersion();

program
    .name("organiz")
    .description(language.description)
    .version(package.version);

/**
*  Init call
*/
program
    .command('init')
    .description(language.command[0].description)
    .action(()=> {
        acao.init();
    });
 
program.parse(process.argv); 
 
 
