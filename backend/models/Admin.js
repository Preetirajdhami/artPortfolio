import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {type: String, required:true, uniqe:true},
    password: {type: String, required:true}
});
 const AdminModel =  mongoose.model("Admin", adminSchema);
 
export default AdminModel;
