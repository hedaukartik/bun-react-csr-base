import { Link } from "react-router-dom";

function Contacts() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((contact) => (
        <li key={contact}>
          <Link to={`${contact}`}>{contact}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
