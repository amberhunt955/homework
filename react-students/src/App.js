import Student from "./components/Student";
import { data } from "./data/data";
import { useState } from "react";
import "./App.css";

function App() {
  const [studentData, setStudentData] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1>Student Bios | Eastwood High School</h1>
      </nav>
      {studentData.map((student) => (
        <Student data={student} />
      ))}
    </div>
  );
}

export default App;
