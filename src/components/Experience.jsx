function Experience({ data, onEdit }) {
  return (
    <section className="section">
      <h2>Experience</h2>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>From:</strong> {data.from}</p>
      <p><strong>To:</strong> {data.to}</p>
      <button onClick={onEdit}>Edit</button>
    </section>
  );
}

export default Experience;
