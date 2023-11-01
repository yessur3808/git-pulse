import CommitCreator from '@commits/create/createCommit';
import { Router, Request, Response } from 'express';


const router = Router();

// Initialize CommitCreator with an array of commit messages
const commitMessages = ['First commit', 'Second commit', 'Another commit'];
const commitCreator = new CommitCreator(commitMessages);

// GET route for retrieving all commits
router.get('/', (req: Request, res: Response) => {
    // Here you would typically retrieve data from a database
    // For this example, we're just sending the commitActivity object
    res.json(commitCreator.commitActivity);
});

// POST route for creating a commit
router.post('/', async (req: Request, res: Response) => {
    try {
        const date = new Date(req.body.date);
        const totalCommits = req.body.totalCommits;

        await commitCreator.createCommit(date, totalCommits);
        res.json({ message: 'Commit created' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating commit' });
    }
});

export default router;