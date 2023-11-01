import { Command } from 'commander';
import ora, { Ora } from 'ora';
import { removeRecentCommits, removeCommitsFromDates, squashAllCommits } from '@commits/remove/removeCommits';

const remove = new Command('remove');

remove
    .option('-r, --recent <number>', 'Remove recent commits')
    .option('-d, --date <date>', 'Delete all commits from a specific date')
    .option('--squash', 'Squash all commits into one')
    .action(async (options) => {
        const spinner: Ora = ora('Initializing...').start();

        // handle removals
        if (options.recent) {
            await removeRecentCommits(options.recent);
        }
        if (options.date) {
            await removeCommitsFromDates(options.date);
        }
        if (options.squash) {
            await squashAllCommits();
        }

        spinner.stop();
    });

export default remove;