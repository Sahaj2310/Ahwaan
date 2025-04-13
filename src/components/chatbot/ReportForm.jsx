"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaFileAlt, FaCamera, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

const ReportForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    category: '',
    subject: '',
    description: '',
    location: '',
    attachments: [],
    priority: 'medium'
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Infrastructure',
    'Public Services',
    'Law and Order',
    'Healthcare',
    'Education',
    'Sanitation',
    'Transportation',
    'Others'
  ];

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  // Remove File
  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  // Submit Report
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);  

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure JSON format
        },
        body: JSON.stringify({
          category: formData.category,
          subject: formData.subject,
          description: formData.description,
          location: formData.location,
          priority: formData.priority,
          attachments: formData.attachments.map(file => file.name), // Attach file names
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setShowSuccess(true);
      } else {
        console.error("Submission failed:", data);
        alert(data.error);
      }
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  
    setIsSubmitting(false);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed bottom-24 right-6 w-96 bg-white rounded-3xl shadow-2xl overflow-hidden z-50 border border-gray-100"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <FaFileAlt className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-white font-semibold leading-none mb-1">Submit Report</h3>
              <p className="text-green-100 text-xs">File a complaint or report</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 text-white"
          >
            <FaTimes size={14} />
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 max-h-[70vh] overflow-y-auto">
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          <div>
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-xl bg-gray-50"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-xl bg-gray-50"
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-xl bg-gray-50"
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-xl bg-gray-50"
            />
          </div>

          <div>
            <label>Priority</label>
            <div className="flex gap-4">
              {['low', 'medium', 'high'].map((priority) => (
                <label key={priority}>
                  <input
                    type="radio"
                    name="priority"
                    value={priority}
                    checked={formData.priority === priority}
                    onChange={handleInputChange}
                  />
                  {priority}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Attachments</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="block w-full mt-2"
            />
            {formData.attachments.map((file, index) => (
              <div key={index} className="mt-2 flex items-center">
                <span>{file.name}</span>
                <button type="button" onClick={() => removeFile(index)}>
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-green-600 text-white rounded-xl"
          >
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FaCheck className="text-green-600 text-xl" />
              <h3>Report Submitted!</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ReportForm;