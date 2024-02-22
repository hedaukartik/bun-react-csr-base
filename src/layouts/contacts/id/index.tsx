import { useParams } from "react-router-dom";

function Contact() {
  let { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <img src={`https://picsum.photos/id/${id}/200/300`} />
    </div>
  );
}

export default Contact;
