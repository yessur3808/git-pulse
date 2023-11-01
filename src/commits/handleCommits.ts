import { Ora } from "ora";
import CommitCreator from './create/createCommit';

async function handleCommits(commitDateList: Date[], commitMessages: string[], spinner: Ora): Promise<void> {
    const commitCreator = new CommitCreator(commitMessages, spinner);

    for (let i = 0; i < commitDateList.length; i++) {
        await commitCreator.createCommit(commitDateList[i], commitDateList.length);
    }
}

export default handleCommits;