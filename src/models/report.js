import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
  attachments: [{ type: String }], // Stores file names or URLs
  createdAt: { type: Date, default: Date.now }
});

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);

export default Report;