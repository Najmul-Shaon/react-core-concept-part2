export default function User({ user }) {
  console.log(user);
  const { name, id, phone, email } = user;
  return (
    <div
      style={{
        margin: "10px",
        border: "5px solid purple",
        padding: "10px",
      }}
    >
      <h4>Name: {name}</h4>
      <p>ID: {id}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}
