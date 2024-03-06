import { Link } from "react-router-dom";
import "./index.scss";

function Home() {
  return (
    <div>
      <h1 className="title">
        Welcome to <span>Bun React CSR App</span>
      </h1>
      <Link to={`contacts`}>View contacts</Link>
    </div>
  );
}

export default Home;
