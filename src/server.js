const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',

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