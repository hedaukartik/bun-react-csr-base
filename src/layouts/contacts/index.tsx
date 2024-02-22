import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div>
      <h1>All Contacts</h1>
      <ul>
        {Array.from(
          { length: 10 },
          () => Math.floor(Math.random() * 100) + 1
        ).map((contact) => (
          <li key={contact}>
            <Link to={`${contact}`}>{contact}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
