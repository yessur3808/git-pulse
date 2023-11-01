import { Command } from 'commander';
import ora, { Ora } from 'ora';
import handleDirectories from '@utils/handleDir';
import createCommitDateList from '@commits/create/createCommitDateList';
import handleCommits from '@commits/handleCommits';

const create = new Command('create');

create
    .option('-s, --start <date>', 'Start date')
    .option('-e, --end <date>', 'End date')
    .option('-c, --count <number>', 'Number of commits per day', '1')
    .option('-m, --message <message>', 'Commit message(s)', 'fake commit')
    .option('-w, --workdays', 'Only commit on workdays')
    .action(async (options) => {
        const spinner: Ora = ora('Initializing...').start();

        // handle directories
        await handleDirectories(options.historyFolder);

        // create commit dates
        const commitDateList = createCommitDateList(options);

        // handle commits
        await handleCommits(commitDateList, options.commitMessages, spinner);

        spinner.stop();
    });

export default create;