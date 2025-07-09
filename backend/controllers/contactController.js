
import Contact from "../models/Contact.js";

class ContactController {
  static async createMessage(req, res) {
    try {
      const contact = new Contact(req.body);
      await contact.save();

      res.status(201).json({
        message: "Message sent successfully!",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to send message",
        error: error.message,
      });
    }
  }

  // Optional: Get all messages (for admin)
  static async getMessages(req, res) {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching messages",
        error: error.
        message,
      });
    }
  }
}

export default ContactController;
