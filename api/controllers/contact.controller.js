import Contact from '../modules/contact.module.js';

// Controller function to handle POST requests to save form data
const saveFormData = async (req, res) => {
    // Extract form data from request body
    const { email, firstName, lastName, phone, company, message } = req.body;

    try {
        // Create a new FormData document
        const newFormData = new Contact({
            email,
            firstName,
            lastName,
            phone,
            company,
            message
        });

        // Save the new FormData document to MongoDB
        await newFormData.save();

        // Respond with success message
        res.status(201).json({ success: true, message: 'Form data saved successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error saving form data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default saveFormData;