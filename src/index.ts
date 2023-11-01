import { Command } from 'commander';
import create from './cli/commands/create';
import remove from './cli/commands/remove';

const program = new Command();

program
    .addCommand(create)
    .addCommand(remove)
    .parse(process.argv);