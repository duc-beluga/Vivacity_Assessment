import { Router } from 'express';
import { getApplicant } from './controller';

const router = Router();

router.get('/', getApplicant);

module.exports = router;