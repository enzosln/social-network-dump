// const fs = require('fs');
// const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config({path:'../../.env'});

const mongoUri = process.env.MONGO_URI;
const jsonFilesPath = process.env.JSON_FILES_PATH;


if (!mongoUri || !jsonFilesPath) {
    console.error('Les variables MONGO_URI ou JSON_FILES_PATH ne sont pas définies dans le .env');
    process.exit(1);
}

const client = new MongoClient(mongoUri);

async function importJsonToMongoDB() {
    try {
        // const absolutePath = path.resolve(jsonFilesPath);

        await client.connect();
        // const db = client.db('');
    } catch (error) {
        console.error('Erreur lors de l\'importation dans MongoDB:', error);
    } finally {
        await client.close();
    }
}

importJsonToMongoDB();
