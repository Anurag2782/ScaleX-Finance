const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        // Verify that MONGODB_URI environment variable is defined
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI environment variable is not defined');
        }

        // Connect to MongoDB with an empty options object
        await mongoose.connect(process.env.MONGODB_URI, {});

        console.log(colors.green('Connected to MongoDB'));
    } catch (err) {
        console.error(colors.red(`Failed to connect to MongoDB: ${err}`));
    }
};

module.exports = connectDB;
