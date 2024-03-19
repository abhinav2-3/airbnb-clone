import Student from "../models/StudentModel.js";

export const addStudent = async (req, res) => {
  const { name, studentId, attendance, createdAt } = req.body;
  try {
    await Student.create({
      name,
      studentId,
      attendance,
      createdAt,
    });
    return res.status(200).json({ message: "Student Created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server Error" });
  }
};

export const getStudent = async (req, res) => {
  const { createdAt } = req.body;
  try {
    const students = await Student.find({ createdAt });
    return res.status(200).json({ students });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server Error" });
  }
};
export const removeStudent = async (req, res) => {
  const { studentId } = req.body;
  try {
    await Student.findOneAndDelete({ studentId });
    return res.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server Error" });
  }
};
