import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { MdDelete } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import {
  API_ADDSTUDENT,
  API_GETSTUDENT,
  API_REMOVESTUDENT,
  rowData,
} from "../data/data";

const TeacherPortal = () => {
  const [studentBox, setStudentBox] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [attendance, setAttendance] = useState("present");
  const dateObject = new Date(date);
  const createdAt = dateObject.toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_ADDSTUDENT, {
        name,
        studentId,
        attendance,
        createdAt,
      });
      if (response) {
        toast.success("Student Added");
        setStudentBox(!studentBox);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };

  const getStudets = async () => {
    try {
      const response = await axios.post(API_GETSTUDENT, { createdAt });
      if (response) {
        setStudentData(response.data.students);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };

  const removeStudent = async (studentId) => {
    try {
      const response = await axios.post(API_REMOVESTUDENT, { studentId });
      if (response) {
        toast.success("Student Removed");
        getStudets();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };

  useEffect(() => {
    getStudets();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full justify-center my-10 gap-8 items-center flex-col md:flex-row">
        <button
          className="rounded px-4 py-2 h-12 bg-green text-black font-semibold"
          onClick={() => setStudentBox(!studentBox)}
        >
          + Add Students
        </button>
        {studentBox && (
          <aside className="flex items-start w-3/4 md:flex-row flex-col gap-8 justify-center md:items-center min-h-28">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Student Name
              </label>
              <input
                className="shadow text-black appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2" htmlFor="email">
                Student Id
              </label>
              <input
                className="shadow text-black appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Student Id"
                name="studentId"
                required
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Mark attendance
              </label>
              <select
                className="text-black"
                name="attendance"
                onChange={(e) => setAttendance(e.target.value)}
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="leave">Leave</option>
              </select>
            </div>
            <button
              type="submit"
              className="rounded px-4 py-2 h-12 bg-green text-black font-semibold"
              onClick={handleSubmit}
            >
              + Add
            </button>
          </aside>
        )}
      </div>

      {/* Table Component */}
      <div className="flex w-full h-full flex-col items-center pb-10">
        <DatePicker
          name="createdAt"
          value={date}
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(date) => setDate(date)}
          className="m-4 text-black rounded px-2 flex items-end"
        />
        <table className="table-auto border-collapse border py-10 w-3/4">
          <thead>
            <tr>
              {rowData.map((i) => (
                <th key={i} className="border px-4 py-2 text-center">
                  {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">{student.name}</td>
                <td className="border px-4 py-2 text-center">
                  {student.studentId}
                </td>
                {student.attendance === "present" ? (
                  <td className="border text-green px-4 py-2 text-center">
                    {student.attendance}
                  </td>
                ) : student.attendance === "absent" ? (
                  <td className="border text-red-600 px-4 py-2 text-center">
                    {student.attendance}
                  </td>
                ) : (
                  <td className="border px-4 py-2 text-center">
                    {student.attendance}
                  </td>
                )}

                <td className="border px-4 py-2 text-center">
                  <button
                    className=" text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded"
                    onClick={() => removeStudent(student.studentId)}
                  >
                    <MdDelete size={28} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherPortal;
