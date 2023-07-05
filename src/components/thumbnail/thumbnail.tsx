import Image from "next/image"
import { ThumbnailProps } from "./thumbnail.props"
import { image_base } from "src/helpers/constants"
import ReactStars from "react-stars"
import { useInfoStore } from "src/store"

const Thumbnail = ({movie, isBig = false}:ThumbnailProps) => {

  const {setModal, setCurrentMovie} = useInfoStore()

  const handleCurrentMovie = () => {
    setModal(true);
    setCurrentMovie(movie);
  }

  return (
    <>
      <div onClick={handleCurrentMovie} className={` ${isBig ? 'md:h-[500px] h-[440px] md:min-w-[490px] min-w-[350px]' : 'md:h-[440px] h-[330px] md:min-w-[292px] min-w-[200px]'}  relative  cursor-pointer transition duration-200 ease-out md:hover:scale-110 `}>
          <Image
            src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
            alt={`${movie.title}`}
            fill
            className="rounded-sm md:rounded object-cover "
          />

      <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-black/25"></div>

      <div className="absolute bottom-2 min-h-[140px]  left-5 right-2">
        <div className="px-[8px] py-[4px] bg-[#e5e5e5]/50 w-[151px] text-center rounded-bl-[8px] rounded-tr-[8px]         sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg">
          {movie?.original_name || movie?.original_title.slice(0, 10)}
        </div>

        <div className="flex items-center space-x-2">
          <ReactStars edit={false} count={10} value={movie.vote_average}  color2={'#fff'} />
          <p className="sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg">( {movie.vote_count} )</p>
        </div>  
        <h1 className="sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg text-2xl text-bold">
           {movie?.title || movie?.name || movie?.original_name}
        </h1>
      </div>  
      </div>

    </>
  )
}

export default Thumbnail