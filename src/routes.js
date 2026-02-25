import express from 'express';
import { createNote } from './controller.js'

const router = express.Router();
router.post('/notes', createNote);

export default router;