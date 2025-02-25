const { nanoid } = require('nanoid');
const notes = require('./notes');

// Handler for get notes by id
const getNotesByIdhandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};

// Handler for get all notes
const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    },
});

// Handler for notes
const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    // Id must unique, use nanoid to make unique random string (maybe)
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updateAt,
    };

    // Push all variable to note
    notes.push(newNote);

    // check if newNotes has stored in notes
    const isSuccess = notes.filter((note) => note.id === id).length > 0
    //decide what response to show
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            }
        });
        response.code(201);
        return response;
    }

    // Response if notes fail to add
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};

// export handler module
module.exports = { addNoteHandler, getAllNotesHandler, getNotesByIdhandler }