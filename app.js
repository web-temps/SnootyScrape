// App Config File
require('dotenv').config({
    path: "./snooty.env"
});
// Snoo-Requires
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');



// Snoo-Init
const snoowrap = new Snoowrap({
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
// Snoo-Config
snoowrap.config({
    requestDelay: 1000,
    warnings: false,
    continueAfterRatelimitError: false,
    retryErrorCodes: [502,504,522],
    maxRetryAttempts:3,
    debug: true
})

// Modules
let rq = require('./requests.js')


rq.stormUnreads(Snoostorm, snoowrap)
