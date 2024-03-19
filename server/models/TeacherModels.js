import mongoose, { Schema } from "mongoose";

const TeacherSchemea = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Teacher = mongoose.model("Teacher", TeacherSchemea);
export default Teacher;
