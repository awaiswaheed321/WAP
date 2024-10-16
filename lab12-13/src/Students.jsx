import { useState, useEffect } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudentsData();
  }, []);

  async function getStudentsData() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/students", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const studentsData = await response.json();
        setStudents(studentsData);
      } else {
        const responseJson = await response.json();
        alert(`Error: ${responseJson.message}`);
      }
    } catch (error) {
      alert(`Fetch error: ${error.message}`);
    }
  }

  return (
    <div className="container">
      <div className="students-container">
        <h1 className="heading">All Students</h1>
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Program</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.program}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
