function BasicInfo({data, onEdit}) {
  return(
    <section>
      <h2>Basic Info</h2>
      <label>Name: {data.name}</label>
      <label>Address: {data.address}</label>
      <label>Phone: {data.phone}</label>
      <label>Email: {data.email}</label>
      <button onClick={onEdit}></button>
    </section>
  );
}

export default BasicInfo;