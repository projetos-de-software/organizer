#!/usr/bin/env node

/**
 * https://github.com/tj/commander.js
 * Used library for parse command
 */

 const { Command } = require('commander');
 const acao  = require("./actions/init");
 const program = new Command();

 /**
 * Check nodejs version
 */
function checkVersion(){
    // TODO: implementar o check da versão do NodeJS @critical
}

// importar JSON language

var language = require('./lang/en.json');
var package = require('../package.json');

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
 
 
