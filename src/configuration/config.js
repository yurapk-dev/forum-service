const config = {
    port: process.env.PORT || 3000,
    mongodb: {
        uri: process.env.MONGO_URI || 'mongodb://yury:1234@localhost:27017/?authSource=admin',
        db: {
            dbName: process.env.DB_NAME || 'fullstack'
        }
    }
}
export default config;