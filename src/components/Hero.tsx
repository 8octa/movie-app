import { MdMovieFilter } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bg-[url(bullseye-gradient.svg)] bg-no-repeat bg-cover h-[100vh] flex flex-col justify-center items-center gap-5 p-10">
      <MdMovieFilter className="text-[5rem] text-light-100" />

      <img src="hero-img.png" alt="" />
      <h1>
        Find <span className="text-light-100">Movies</span> You’ll Love Without
        the Hassle
      </h1>
      <p>Search</p>
    </section>
  );
};

export default Hero;
