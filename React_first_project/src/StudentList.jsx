import StudentCard from './StudentCard';

function StudentList(props) {
  const { students } = props;
  
  return (
    <div className="student-list">
      <div className="list-header">
        <h2>Student Roster</h2>
        <button className="total-btn">Total: {students.length}</button>
      </div>
      
      <div className="student-grid">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
