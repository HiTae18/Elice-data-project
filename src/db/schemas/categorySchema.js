import { Schema } from "mongoose";

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
});

export { categorySchema };
