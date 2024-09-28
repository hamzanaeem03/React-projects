import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-6">
      Home
      <Link
        className="rounded-xl border-solid border-2 p-2 bg-slate-900"
        to={"/imagegrid"}
      >
        Photo App
      </Link>
      <Link
        className="rounded-xl border-solid border-2 p-2 bg-slate-900"
        to={"/todo"}
      >
        Todo App
      </Link>
      {/* <Link
        className="rounded-xl border-solid border-2 p-2 bg-slate-900"
        to={"/shoppingcart"}
      >
        Shopping App
      </Link>
      <Link
        className="rounded-xl border-solid border-2 p-2 bg-slate-900"
        to={"/Weatherapp"}
      >
Weather App      </Link> */}
      
    </div>
  );
};

export default Home;
