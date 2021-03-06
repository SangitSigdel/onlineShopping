"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
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
            "laptop",
            "desktop",
            "home_appliance",
            "gaming_console",
            "digital_camera",
            "slider",
        ],
        required: [true, "A product must have a category"],
    },
});
exports.productModel = mongoose_1.model("products", productSchema);
