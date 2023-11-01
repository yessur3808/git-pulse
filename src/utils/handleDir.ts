import process from "process";
import { promises as fs } from 'fs';
import execAsync from '../utils/execAsync';

async function handleDirectories(historyFolder: string): Promise<void> {
    try {
        await fs.access(historyFolder);
        await fs.rmdir(historyFolder, { recursive: true });
    } catch (error) {
        if (error instanceof Error) { // This type check ensures error is an instance of Error.
            const nodeError = error as NodeJS.ErrnoException; // Cast error to NodeJS.ErrnoException to access the `code` property.
            if (nodeError.code !== 'ENOENT') throw error;
        }
        else throw error;
    }
    await fs.mkdir(historyFolder, { recursive: true });
    process.chdir(historyFolder);
    await execAsync(`git init`);
}

export default handleDirectories;