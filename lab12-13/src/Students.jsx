export default function Students({ students }) {
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
              <tr
                key={student.id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
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
