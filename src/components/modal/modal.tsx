import MiuModal from '@mui/material/Modal'
import { useInfoStore } from 'src/store'
import {FaTimes} from 'react-icons/fa'
import { useEffect } from 'react'

const Modal = () => {

    const {modal, setModal, currentMovie} = useInfoStore()

    const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;
    const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

    const api = `${base_url}/${currentMovie?.media_type === 'tv' ? 'tv' : 'movie'}/${currentMovie.id}/videos?api_key=${api_key}&language=en-US`

    useEffect(() => {
        const fetchVideoData = async () => {
            const data = await fetch(api).then(res => res.json())

            console.log(data)
        }

        fetchVideoData()

    }, [currentMovie])

    const handleClose = () => {
        setModal(false)
    }

  return <MiuModal open={modal} onClose={handleClose}>
        <>
            <button onClick={handleClose} className='modalBtn' type='button'>
                <FaTimes/>
            </button>
        </>
    </MiuModal>
  
}

export default Modal