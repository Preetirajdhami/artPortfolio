import mongoose from "mongoose";

const ComissionSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    portraitImage: {
      type: String, 
      required: true,
    },
    numberOfPortraits: {
      type: Number,
      required: true,
      min: 1,
    },
    size: {
      type: String,
      required: true,
      enum: ["A5", "A4", "A3", "A2"]
    }, 
    shippingDestination: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    additionalInfo: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true } 
);

const Comission = mongoose.model("Comission", ComissionSchema);
export default Comission;
