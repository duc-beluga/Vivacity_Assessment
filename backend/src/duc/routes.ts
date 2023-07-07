import { Router } from 'express';
import { getApplicant, updateApplicant } from './controller';

const router = Router();

router.get('/', getApplicant);

router.put('/:id', updateApplicant);

module.exports = router;