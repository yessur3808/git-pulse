import execAsync from '@utils/execAsync';

async function removeRecentCommits(numberOfCommits: number): Promise<void> {
    await execAsync(`git reset --hard HEAD~${numberOfCommits}`);
}

async function removeCommitsFromDates(date: string): Promise<void> {
    // Find the commit hash(es) from the specific date
    const { stdout: log } = await execAsync(`git log --after="${date} 00:00" --before="${date} 23:59" --pretty=format:"%H"`);

    const commitHashes = log.split('\n');

    for (const commit of commitHashes) {
        // Use rebase to remove the commit
        await execAsync(`git rebase --onto ${commit}^ ${commit}`);
    }
}

async function squashAllCommits(): Promise<void> {
    const initCommitHash = await execAsync(`git rev-list --max-parents=0 HEAD`);
    await execAsync(`git reset --soft ${initCommitHash}`);
    await execAsync(`git commit -m "Squashed commit"`);
}

export { removeRecentCommits, removeCommitsFromDates, squashAllCommits };