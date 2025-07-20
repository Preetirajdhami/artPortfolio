import Comission from "../models/Comission.js"; 

class ComissionController {
  static async createComission(req, res) {
    try {
      const comission = new Comission({
        ...req.body,
        portraitImage: req.file?.path, 
      });

      await comission.save();

      res.status(201).json({
        message: "Commission request submitted successfully!",
        comission, 
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }

  static async getAllComissions(req, res)
  
  {
    try{
      const comissions = await Comission.find().sort({ createdAt: -1});
      res.status(200).json(comissions);
    
  }
    catch(error){
      res.status(500).json({
        message: "error.message"
      });

    }

  }

  static async updateStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Optional: validate status value
    const validStatuses = ["pending", "in progress", "completed", "cancelled"];
    if (!validStatuses.includes(status.toLowerCase())) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedComission = await Comission.findByIdAndUpdate(
      id,
      { status: status.toLowerCase() },
      { new: true }
    );

    if (!updatedComission) {
      return res.status(404).json({ message: "Commission not found" });
    }

    res.status(200).json({
      message: "Status updated successfully",
      comission: updatedComission,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

}

export default ComissionController;
