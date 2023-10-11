const Mongoose = require("mongoose")
const slug = require("mongoose-slug-generator")
const { Schema } = Mongoose

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
}

Mongoose.plugin(slug, options)

// Product Schema
const ProductSchema = new Schema({
  sku: {
    type: String,
  },
  name: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
  imageUrl: {
    type: String,
  },
  imageKey: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Object,
    default: {
      "6": 100,
      "8": 200,
      "10": 300,
      "12": 400,
      "15": 500,
      "20": 600,
      "25": 700,
      "50": 800,
      "100": 900,
    },
  },
  taxable: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    default: {
      1: "6",
      2: "8",
      3: "10",
      4: "12",
      5: "15",
      6: "20",
      7: "25",
      8: "50",
      9: "100",
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    default: null,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Mongoose.model("Product", ProductSchema)
