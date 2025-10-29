function Socials({ data, onEdit }) {
  return (
    <section className="section">
      <h2>Social Media</h2>
      <p><strong>LinkedIn:</strong> {data.linkedin}</p>
      <p><strong>GitHub:</strong> {data.github}</p>
      <button onClick={onEdit}>Edit</button>
    </section>
  );
}

// export default Socials;