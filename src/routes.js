const { addNoteHandler, getAllNotesHandler, getNotesByIdhandler } = require("./handler");

const routes = [
    // handler for saving notes
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesByIdhandler,
    }
]

// Export this route module
module.exports = routes;