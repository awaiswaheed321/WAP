import { useState } from "react";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    program: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name.trim() || !formData.program.trim()) {
      alert("Please Enter all inputs.");
      return;
    }
    submitForm();
  };

  async function submitForm() {
    const data = {
      name: formData.name,
      id: formData.id,
      program: formData.program,
    };
    try {
      const response = await fetch("http://localhost:3000/api/v1/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert(
          `Success: Student Created with ID: ${formData.id}, Name: ${formData.name} and Program: ${formData.program}`
        );
        setFormData({
          id: "",
          name: "",
          program: "",
        });
      } else {
        const responseJson = await response.json();
        alert(`Error: ${responseJson.message}`);
      }
    } catch (error) {
      alert(`Fetch error: ${error.message}`);
    }
  }

  const handleReset = () => {
    setFormData({
      id: "",
      name: "",
      program: "",
    });
  };

  return (
    <div className="add-student-container">
      <h1>Create a Student</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentId">ID:</label>
        <br />
        <input
          id="studentId"
          type="number"
          placeholder="Student ID"
          className="info-inputs"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="studentName">Name:</label>
        <br />
        <input
          id="studentName"
          type="text"
          placeholder="Student Name"
          className="info-inputs"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="studentProgram">Program:</label>
        <br />
        <input
          id="studentProgram"
          type="text"
          placeholder="Student Program"
          className="info-inputs"
          name="program"
          value={formData.program}
          onChange={handleChange}
          required
        />
        <div className="button-container">
          <button type="reset" className="reset-button" onClick={handleReset}>
            Reset
          </button>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
