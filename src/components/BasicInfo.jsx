function BasicInfo({data, onEdit}) {
  return(
    <section className="section">
      <h2>Basic Info</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Address:</strong> {data.address}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <button onClick={onEdit}>Edit</button>
    </section>
  );
}

export default BasicInfo;