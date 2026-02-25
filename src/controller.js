import { nanoid }  from 'nanoid';
import notes from './notes.js';

export const createNote = (req, res, next) => {
    const { title = 'untitled', tags, body } = req.body;
    const id = nanoid(16); // Generate id menggunakan lib nanoid
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const newNote = { title, tags, body, id, createdAt, updatedAt };

    // Push note baru ke list note
    notes.push(newNote);

    // Cek apakah note sudah berhasil dimasukkan ke list
    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    // beri respon
    if (isSuccess) {
        res.status(201).json({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: { noteId: id }
        });
    }

    // Jika gagal menyimpan notes
    return res.status(500).json({
        status: 'fail',
        message: 'Catatan gagal ditambahkan'
    });

};