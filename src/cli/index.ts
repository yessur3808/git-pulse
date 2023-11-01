import { Command } from 'commander';
import create from './commands/create';
import remove from './commands/remove';

const program = new Command();

program
    .addCommand(create)
    .addCommand(remove)
    .parse(process.argv);