import { Ora } from "ora";
import execAsync from '../../utils/execAsync';
import { sample } from 'lodash';

class CommitCreator {
    private _commitActivity: Record<string, number> = {};
    private commitsCreated = 0;

    constructor(private commitMessages: string[], private spinner?: Ora) { }

    // Getter for commitActivity
    get commitActivity() {
        return this._commitActivity;
    }

    async createCommit(date: Date, totalCommits: number): Promise<void> {
        const commitMessage = sample(this.commitMessages) || "fake commit";
        await execAsync(`echo "${date}" > foo.txt`);
        await execAsync(`git add .`);
        await execAsync(`git commit --quiet --date "${date}" -m "${commitMessage}"`);

        // Increment commit count
        const dateStr = date.toISOString().split('T')[0];
        if (this._commitActivity[dateStr]) {
            this._commitActivity[dateStr]++;
        } else {
            this._commitActivity[dateStr] = 1;
        }

        this.commitsCreated++;
        if (this.spinner) {
            this.spinner.text = `Creating commit ${this.commitsCreated} of ${totalCommits}...`;
        }
    }
}

export default CommitCreator;