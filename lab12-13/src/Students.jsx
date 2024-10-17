import { useState } from "react";
import StudentInfoModal from "./StudentInfoModal";

export default function Students({ students, setStudents }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    id: "",
    name: "",
    program: "",
  });

  async function deleteFromServer(id) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/students/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert(`Success: Student deleted with ID: ${id}`);
        setStudents((prevStudents) => prevStudents.filter((x) => x.id !== id));
      } else {
        const responseJson = await response.json();
        alert(`Error: ${responseJson.message}`);
      }
    } catch (error) {
      alert(`Fetch error: ${error.message}`);
    }
  }

  async function getStudentDataByID(id) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/students/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const studentDataJson = await response.json();
        setModalInfo(studentDataJson);
        setIsOpen(true);
      } else {
        const responseJson = await response.json();
        alert(`Error: ${responseJson.message}`);
      }
    } catch (error) {
      alert(`Fetch error: ${error.message}`);
    }
  }

  function handleDelete(id) {
    deleteFromServer(id);
  }

  const closeModal = () => setIsOpen(false);

  function showInfo(id) {
    getStudentDataByID(id);
  }
  return (
    <div className="container container2">
      <div className="students-container">
        <h1 className="heading">All Students</h1>
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Program</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.program}</td>
                <td className="centered-button">
                  <button
                    className="show-info-button"
                    onClick={() => showInfo(student.id)}
                  >
                    💁
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(student.id)}
                  >
                    ✖️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <StudentInfoModal closeModal={closeModal} id={modalInfo.id} name={modalInfo.name} program={modalInfo.program} />
        )}
      </div>
    </div>
  );
}
