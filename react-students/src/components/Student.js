import Score from "./Score";

function Student(props) {
  const { data } = props;

  return (
    <div className="student">
      <h2>{data.name}</h2>
      <div className="student-info">
        <p>{data.bio}</p>
        <Score data={data} />
      </div>
    </div>
  );
}

export default Student;
