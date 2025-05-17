import mongoose from 'mongoose';

interface Options{
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect(options:Options) {

        const { dbName, mongoUrl } = options;
        try {

             await mongoose.connect(mongoUrl,{
                dbName: dbName,
            });

            console.log('MongoDB connected successfully');
            return true;
            
        } catch (error) {
            console.log('Error connecting to MongoDB:');
            throw error;
        }
    }
}