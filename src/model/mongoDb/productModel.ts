import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  quantity: {
    type: Number,
    required: [true, "A product must have a quantity"],
  },
  description: String,
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  promotional: {
    type: Boolean,
    default: false,
  },
  slider: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: [
      "mobile",
      "laptops",
      "desktops",
      "home_appliances",
      "gaming_consoles",
      "digital_cameras",
      "slider",
    ],
    required: [true, "A product must have a category"],
  },
});

export const productModel = model("products", productSchema);
