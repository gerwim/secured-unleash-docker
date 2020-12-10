/* eslint-disable import/no-unresolved */

'use strict';

const auth = require('basic-auth');
const { User } = require('unleash-server');

function basicAuthentication(app) {
    app.use('/api/admin/', (req, res, next) => {
        const credentials = auth(req);

        if (credentials) {
            if (credentials.name === process.env.AUTH_USERNAME && credentials.pass === process.env.AUTH_PASSWORD) {
                req.user = new User({email: `${credentials.name}@domain.com`});
                return next();
            }
        }

        return res
            .status('401')
            .set({ 'WWW-Authenticate': 'Basic realm="Unleash"' })
            .end('access denied');
    });
}

module.exports = basicAuthentication;
