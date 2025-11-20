import './App.css'
import StudentList from './StudentList'

function App() {
  const students = [
    { name: "Amit", grade: "A" },
    { name: "Sumit", grade: "B" },
    { name: "Priya", grade: "A" },
    { name: "Ravi", grade: "B" },
    { name: "Neha", grade: "A" },
    { name: "Karan", grade: "C" }
  ];

  return (
    <div className="App">
      <StudentList students={students} />
    </div>
  );
}

export default App
