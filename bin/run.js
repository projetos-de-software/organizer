#!/usr/bin/env node

/**
 * https://github.com/tj/commander.js
 * Used library for parse command
 */

 const { Command } = require('commander');
 const program = new Command();
 
 program
    .option('-i, --init','init organizer report');
 
 program.parse(process.argv);
 
 const options = program.opts();
 
 if(options.init){
     console.log('teste');
 }
 