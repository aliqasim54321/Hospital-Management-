// models/ContactSchema.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Contact', ContactSchema);
