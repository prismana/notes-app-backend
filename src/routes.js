import express from 'express';
import { createNote, getNotes, getNotesById, editNoteById, deleteNoteById } from './controller.js'

const router = express.Router();
router.post('/notes', createNote);

// Get semua notes
router.get('/notes', getNotes);

// Get note berdasarkan id (spesifik)
router.get('/notes/:id', getNotesById);

// Mengubah note
router.put('/notes/:id', editNoteById);

// Hapus note
router.delete('/notes/:id', deleteNoteById);

export default router;