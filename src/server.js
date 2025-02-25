const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        // Using hostname from env
        host: process.env.NODE_ENV !== 'production' ? 'localhost': '0.0.0.0',

        // Some-Origin policy
        routes: {
            cors: {
                origin: ['*'],
            }
        },
    });

    // Connect routes here
    server.route(routes)

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init()