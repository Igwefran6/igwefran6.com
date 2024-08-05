import React, { useState } from "react";
import validator from "validator";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};

    if (validator.isEmpty(name)) {
      newErrors.name = "Name is required.";
    }

    if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (validator.isEmpty(message)) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      setSubmissionStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      setSubmissionStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-screen bg-[url('/images/Get-in-touch.jpg')] bg-fixed bg-center bg-no-repeat bg-cover p-20 ">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-md w-full bg-transparent shadow-lg rounded-lg">
        <h2 className="text-4xl mb-6 text-primary">Get In Touch</h2>
        <hr className="w-24 border-t-4 my-4 border-text-orange" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-2xl text-primary font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border-b-2 border-primary bg-[#00000044] text-primary p-2 pb-1 font-semibold focus:border-b-2 focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-2xl text-primary font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border-b-2 border-primary bg-[#00000044] text-primary p-2 pb-1 font-semibold focus:border-b-2 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-primary text-2xl font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border-b-2 border-primary bg-[#00000044] text-primary p-2 pb-1 font-semibold focus:border-b-2 focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-2xl w-full py-2 px-4 border-4 border-primary  text-primary hover:bg-secondary hover:text-primary font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submissionStatus && (
            <div className="mt-4 text-sm text-white">{submissionStatus}</div>
          )}
        </form>
      </div>
      <button className="absolute bottom-8 right-20 text-2xl text-primary">
        Goto Top
      </button>
    </div>
  );
};

export default Contact;
