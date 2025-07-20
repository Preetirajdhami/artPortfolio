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

  static async getMessages(req, res) {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching messages",
        error: error.message,
      });
    }
  }

  // ✅ Delete a specific message by ID
  static async deleteMessage(req, res) {
    try {
      const { id } = req.params;
      const deletedMessage = await Contact.findByIdAndDelete(id);

      if (!deletedMessage) {
        return res.status(404).json({ message: "Message not found" });
      }

      res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Failed to delete message",
        error: error.message,
      });
    }
  }

  static async toggleArchive(req, res){
    try{
      const{id} = req.params;

      const message = await Contact.findById(id)
      if(!message){
        return res.status(404).json({message: "Message not found"})
        
      }

      message.archived = !message.archived;
      await message.save();

        res.status(200).json({
        message: `Message ${message.archived ? "archived" : "unarchived"} successfully`,
        archived: message.archived,
      })
    } catch (error) {
      res.status(500).json({
        message: "Failed to archive/unarchive message",
        error: error.message,
      })
  }
}
}

export default ContactController;
