import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Bun React CSR App</h1>
      <Link to={`contacts`}>View contacts</Link>
    </div>
  );
}

export default Home;
