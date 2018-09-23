module.exports = {
    app: {
        port: process.env.APP_PORT,
        hashKey: process.env.APP_KEY
    },
    mongo: {
        url: process.env.MONGO_URL
    }
};
