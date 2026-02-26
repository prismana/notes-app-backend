import express from 'express';
import { createNote, getNotes, getNotesById } from './controller.js'

const router = express.Router();
router.post('/notes', createNote);

// Get semua notes
router.get('/notes', getNotes);

// Get note berdasarkan id (spesifik)
router.get('/notes/:id', getNotesById);

export default router;