// controllers/contactController.js
import Contact from "../models/ContactSchema.js"; // Import the contact schema

export const submitContactForm = async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    const newContact = new Contact({
      email,
      subject,
      message,
    });

    await newContact.save();
    
    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};
