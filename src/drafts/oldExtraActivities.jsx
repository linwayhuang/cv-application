function ExtraActivities({ data, onEdit }) {
  return (
    <section className="section">
      <h2>Extra Activities</h2>
      <p>{data.hobby}</p>
      <button onClick={onEdit}>Edit</button>
    </section>
  );
}
// export default ExtraActivities;