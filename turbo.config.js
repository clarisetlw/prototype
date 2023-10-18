module.exports = {
    projects: [
      {
        name: 'client', // Name of front-end project
        path: '/packages/client', // Path to the front-end project
        main: 'package.json', // Main package.json file
        commands: {
          start: 'pnpm start',
          build: 'pnpm run build',
        },
      },
      {
        name: 'server', // Name of server project
        path: '/packages/server', // Path to the server project
        main: 'package.json', // Main package.json file
        commands: {
          start: 'node server.js',
        },
      },
    ],
  };
  