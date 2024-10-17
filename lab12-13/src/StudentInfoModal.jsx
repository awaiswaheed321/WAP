export default function StudentInfoModal({ closeModal, id, name, program }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Student Information</h2>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Program: {program}</p>
        <button className="delete-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
