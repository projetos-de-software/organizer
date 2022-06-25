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

/**
*  Init call
*/
program
    .command('init')
    .description('Init repo')
    .action(()=> {
        acao.init();
    });
 
program.parse(process.argv); 
 
 
