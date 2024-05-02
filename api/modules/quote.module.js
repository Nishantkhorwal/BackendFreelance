// models/quoteForm.js

import mongoose from 'mongoose';

const quoteFormSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email2: {
        type: String,
        required: true
    },
    message2: {
        type: String,
        required: true
    }
});

const QuoteForm = mongoose.model('QuoteForm', quoteFormSchema);

export default QuoteForm;
