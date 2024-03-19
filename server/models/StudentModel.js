import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  attendance: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;
