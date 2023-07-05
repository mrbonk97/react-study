import { Link, useParams } from "react-router-dom";

const Home = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>{username} Home</h1>
      <div>
        Your Todos <Link to="/todos">Go</Link>
      </div>
    </div>
  );
};

export default Home;
