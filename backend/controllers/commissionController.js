
class ComissionController{
    static async createComission(req, res) {

        try{
            const comission = new ComissionController(req.body);
            await comission.save();
            res.status(201).json({ message: "Commission request submitted successfully!", commission });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }
} 