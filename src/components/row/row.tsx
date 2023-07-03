import { useRef, useState } from "react"
import Thumbnail from "../thumbnail/thumbnail"
import { RowProps } from "./row.props"
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'

const Row = ({title, movies}: RowProps) => {

  const [moved, setMoved] = useState<boolean>(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleClick = (direction: 'left' | 'right') => {
    setMoved(true)

    if(carouselRef.current){
      const {  scrollLeft, clientWidth  } = carouselRef.current

      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

      carouselRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})

      if(direction === 'left' && scrollTo === 0){
        setMoved(false)
      }
    }
  }

  return ( 
    <div className="h-[600px] space-y-1 md:space-y-2">
      <h2 className='hover:text-shadow w-56 cursor-pointer text-sm md:text-2xl transition duration-200 font-semibold'>{title}</h2>
      {/* carousel */}
      <div className='group mg:m6-2 relative'>
        <AiFillCaretLeft 
          className={`
            absolute cursor-pointer top-0 left-2 bottom-0 z-40 h-6 w-6 m-auto opacity-0 group-hover:opacity-100 transition duration-200 scale-125
            ${!moved && 'hidden'}
          `}          
          onClick={() => handleClick('left')}
        />
        <div ref={carouselRef} className="flex scrollbar-hide items-center overflow-hidden space-x-1 overflow-x-scroll md:space-x-4">
         {movies.map(movie => (
          <Thumbnail key={movie.id} movie={movie}/>
         ))}
        </div>
        <AiFillCaretRight 
          className={`
          absolute cursor-pointer top-0 right-2 bottom-0 z-40 h-6 w-6 m-auto opacity-0 group-hover:opacity-100 transition duration-200 scale-125
          `}
          onClick={() => handleClick('right')}  
        />
      </div>
    </div>
  )
}

export default Row