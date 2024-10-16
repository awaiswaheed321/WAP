import { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

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
            {students.map((student) => (
              <tr key={student.id}>
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
