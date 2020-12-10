'use strict';

const unleash = require('unleash-server');
const basicAuthentication = require('./basicAuthentication');

unleash
    .start({
        databaseUrl: process.env.DATABASE_URL,
        adminAuthentication: 'custom',
        preRouterHook: basicAuthentication,
    })
    .then(unleash => {
        console.log(
            `Unleash started on http://localhost:${unleash.app.get('port')}`,
        );
    });
