function Education({data, onEdit}) {
  return(
    <section className="section">
      <h2>Education</h2>
      <p><strong>School:</strong> {data.school}</p>
      <p><strong>Major:</strong> {data.major}</p>
      <p><strong>From:</strong> {data.from}</p>
      <p><strong>To:</strong> {data.to}</p>
      <button onClick={onEdit}>Edit</button>
    </section>
  );
}

export default Education;