function StudentCard(props) {
  const { student } = props;
  
  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{student.name}</h3>
        <p className="student-label">Student</p>
      </div>
      <div className="grade-badge">
        {student.grade}
      </div>
    </div>
  );
}

export default StudentCard;
