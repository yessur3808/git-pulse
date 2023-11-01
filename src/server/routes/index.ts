import { Router } from 'express';
import commits from './commits';

const router = Router();

router.use('/commits', commits);

export default router;