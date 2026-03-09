import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/znexus_2k26');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        throw new Error(`MongoDB connection failed: ${error.message}`);
    }
};

export default connectDB;
