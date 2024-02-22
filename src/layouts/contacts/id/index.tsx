import { useParams } from "react-router-dom";

function Contact() {
  let { id } = useParams();
  return (
    <div>
      <h1>Contact Details for: {id}</h1>
      <img
        src={`https://picsum.photos/id/${id}/200/300`}
        loading="lazy"
        alt={id}
      />
    </div>
  );
}

export default Contact;
