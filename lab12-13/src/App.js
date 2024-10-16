import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AddStudent from "./AddStudent.jsx";
import Students from "./Students.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <AddStudent />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
