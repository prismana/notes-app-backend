const { addNoteHandler, getAllNotesHandler } = require("./handler");

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
        handler: getAllNotesHandler
    }
]

// Export this route module
module.exports = routes;