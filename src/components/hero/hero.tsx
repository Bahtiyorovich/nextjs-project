import { IMovie } from "src/interface/app.interface";
import { HeroProps } from "./hero.props";
import { useState, useEffect } from "react";
import Image from "next/image";
import { image_base } from "src/helpers/constants";
import {TbPlayerPlay} from 'react-icons/tb'

const Hero = ({ trending }: HeroProps): JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    setMovie(randomMovie);
  }, [trending]);

  return (
    <div className="flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end">
      <div className="absolute top-0 left-0 -z-10 lg:h-[95vh] h-[45vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie.title}
          fill
        />
      </div>
      <h1 className="sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg text-2xl md:text-4xl lg:text-7xl text-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl">
        {movie?.overview}
      </p>

      <div>
        <button className="flex justify-center items-center w-[200px] h-[56px] rounded-full border-solid border-2">
          <TbPlayerPlay className="mr-3 h-5 w-5 md:h-8 md:w-8"/>
          Watch now
        </button>
      </div>
    </div>
  );
};

export default Hero;
