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
}

export default ComissionController;
