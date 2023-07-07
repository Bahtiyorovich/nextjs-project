import MiuModal from '@mui/material/Modal'
import { useInfoStore } from 'src/store'
import {FaTimes} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { Element } from 'src/interface/app.interface'
import ReactPlayer from 'react-player'
import { BiPlus } from 'react-icons/bi'
import { BsVolumeUp, BsVolumeMute } from 'react-icons/bs'
import {CiPause1} from 'react-icons/ci'
import { BsPlayCircle } from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'


const Modal = () => {
    const {modal, setModal, currentMovie} = useInfoStore()
    const [trailer, setTrailer] = useState<string>('')
    const [muted, setMuted] = useState<boolean>(true)
    const [play, setPlay] = useState<boolean>(true)

    const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;
    const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

    const api = `${base_url}/${currentMovie?.media_type === 'tv' ? 'tv' : 'movie'}/${currentMovie.id}/videos?api_key=${api_key}&language=en-US`

    useEffect(() => {
        const fetchVideoData = async () => {
            const data = await fetch(api).then(res => res.json())
            
            if(data?.results) {
                const index = data.results.findIndex((el: Element) => el.type === 'Trailer')
                setTrailer(data?.results[index]?.key)
            }
        
        }

        fetchVideoData()

    }, [currentMovie])

    const handleClose = () => {
        setModal(false)
    }

  return <MiuModal open={modal} onClose={handleClose} className="playerScroll fixed !top-7 left-0 right-0 z-50 px-10 mx-auto w-full max-w-6xl bg-transparent rounded overflow-hidden overflow-y-auto">
        <>
            <button onClick={handleClose} className='modalBtn absolute right-1 top-0 !z-40' type='button'>
                <FaTimes/>
            </button>

            <div className='relative pt-[55%]'>
                <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${trailer}`} 
                    playing={play} 
                    width={'100%'} height={'100%'} 
                    style={{position: 'absolute', top: 0, left: 0}} 
                    muted={muted}
                />
                <div className="absolute bottom-10 left-10 flex w-full items-center justify-between px-18">
                    <div className="flex space-x-2 items-center justify-around">
                        <button 
                            onClick={() => setPlay(prev => !prev)}
                            className="flex items-center gap-x-2  rounded bg-white/60 px-6 py-2  transition hover:bg-[#e6e6e6]">
                             {play ? <CiPause1 className='h-6 w-6 text-black'/> : <BsPlayCircle className='h-6 w-6 text-black'/>}
                        </button>
                        <button className='modalBtn' onClick={() => setMuted(prev => !prev)}>
                            {muted ? <BsVolumeMute className='h-6 w-6'/> : <BsVolumeUp className='h-6 w-6'/>}
                        </button>
                        <button className='modalBtn'>
                            <AiOutlineLike className='h-6 w-6'/>
                        </button>
                        <button className='modalBtn'>
                            <BiPlus className='h-6 w-6'/>
                        </button>
                    </div>
                </div>
            </div>

            {/* overwiev */}

            <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
                <div className="space-y-6 text-lg">
                    <div className="flex items-center space-x-2 text-sm">
                        <p className="font-semibold text-green-400">{currentMovie?.vote_average * 10}% Match</p>
                        <p className="font-light">{currentMovie?.release_date}</p>
                        <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-sm ">HD</div>
                    </div>

                    <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                        <p className="w-5/6">{currentMovie?.overview}</p>
                        <div className="flex flex-col space-y-3 text-sm">
                            <div>
                                <span className='text-[grey]'>Original Language:</span> {currentMovie?.original_language}
                            </div>
                            <div>
                                <span className='text-[grey]'>Total Votes:</span> {currentMovie?.vote_count}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    </MiuModal>
  
}

export default Modal