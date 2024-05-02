import mongoose from 'mongoose';

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
const Contact = mongoose.model('FormData', formDataSchema);

export default Contact;