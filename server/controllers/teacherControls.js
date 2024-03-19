import Teacher from "../models/TeacherModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = "thisisattendenceportalapi";

export const teacherSignup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const existingTeacher = await Teacher.findOne({ email });

    if (existingTeacher)
      return res.status(409).json({ error: "Teacher Already Exist" });

    const hashedPassword = await bcrypt.hash(password, 10);

    let teacher = await Teacher.create({
      name,
      email,
      password: hashedPassword,
    });

    const authToken = jwt.sign({ teacherId: teacher.id }, SECRET_KEY);

    return res.status(201).json({ success: true, authToken, teacher });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const teacherLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const existingTeacher = await Teacher.findOne({ email }).select(
      "+password"
    );

    if (!existingTeacher)
      return res.status(400).json({ error: "Teacher Does Not Exist" });

    const isMatch = await bcrypt.compare(password, existingTeacher.password);

    if (!isMatch) return res.status(401).json({ error: "Password is invalid" });

    const authToken = jwt.sign({ teacherId: existingTeacher._id }, SECRET_KEY);

    return res.status(201).json({ success: true, authToken, existingTeacher });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
