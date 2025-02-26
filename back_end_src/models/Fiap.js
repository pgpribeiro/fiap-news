import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);


const fiapSchema = new mongoose.Schema({
  // id: { type: Number, unique: true },
  title: { type: String, required: true },
  description: { type: String},
  imageUrl: { type: String,},
  fullText: { type: String },
}, {versionKey: false});


// Add incremention for ID field
fiapSchema.plugin(AutoIncrement, { inc_field: "id" });

// Remove old _id from json
fiapSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._id; // Remover o campo `_id`
    delete ret.__v; // Remover o `__v` do Mongoose
      return {
        id: ret.id, // Primeiro campo
        title: ret.title,
        description: ret.description,
        imageUrl: ret.imageUrl,
        fullText: ret.fullText,
      }
  },
});

const fiap = mongoose.model("fiap", fiapSchema);

export default fiap;
