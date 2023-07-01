import * as mongoose from "mongoose";
import { model } from "mongoose";

const shopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: {
    type: { type: String, required: true },
    coordinates: [Number],
  },
});

shopSchema.index({ location: "2dsphere" }); // Create a 2dsphere index on the location field

export default model("shops", shopSchema);
