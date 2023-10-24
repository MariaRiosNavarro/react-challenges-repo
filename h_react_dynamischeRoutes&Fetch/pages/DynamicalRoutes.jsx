import data from "../data/data.json";
import { Link } from "react-router-dom";

const DynamicalRouter = () => {
  console.log(data, "here");
  return (
    <section>
      <h1></h1>
      <article className="user">
        {data.map((user, index) => (
          <div key={index}>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.birthday}</p>
            <Link to={`/dynamic/${user.id}`}>More</Link>
            <p>hallo</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default DynamicalRouter;
