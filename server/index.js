import express from "express";
import { connectDB } from "./database.js";
import "dotenv/config";
import cors from "cors";
import router from "./routers/teacherRoutes.js";

const app = express(express);

app.use(cors());
app.use(express.json());
app.use("/", router);

connectDB();

app.get("/", (req, res) => {
  res.send("abhinav");
});

app.listen(process.env.PORT, () =>
  console.log(`server is running on http://localhost:${process.env.PORT}`)
);
