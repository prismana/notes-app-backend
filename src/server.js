import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.NODE_ENV || 'localhost';

// Setting Cross-origin resource sharing (CORS)
app.use( cors({
    origin: 'http://notesapp-v1.dicodingacademy.com'
}))

// set url ke aplikasi notes (/)
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);

})