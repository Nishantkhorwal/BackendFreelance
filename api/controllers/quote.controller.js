import QuoteForm from '../modules/quote.module.js';

// Controller function to handle POST requests to save form data
const saveQuoteFormData = async (req, res) => {
    // Extract form data from request body
    const { first_name, last_name, email2, message2 } = req.body;

    try {
        // Create a new QuoteForm document
        const newQuoteForm = new QuoteForm({
            first_name,
            last_name,
            email2,
            message2
        });

        // Save the new QuoteForm document to MongoDB
        await newQuoteForm.save();

        // Respond with success message
        res.status(201).json({ success: true, message: 'Form data saved successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error saving form data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default saveQuoteFormData;