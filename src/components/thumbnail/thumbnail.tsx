import Image from "next/image"
import { ThumbnailProps } from "./thumbnail.props"
import { image_base } from "src/helpers/constants"

const Thumbnail = ({movie}:ThumbnailProps) => {
  return (
    <div className="md:h-[440px] h-[330px] relative md:min-w-[292px] min-w-[200px] cursor-pointer transition duration-200 ease-out md:hover:scale-110 ">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={`${movie.title}`}
          fill
          className="rounded-sm md:rounded object-cover "
        />
    </div>
  )
}

export default Thumbnail