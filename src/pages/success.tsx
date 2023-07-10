import {useState} from 'react'
import Image  from 'next/image';
import Link from 'next/link';
import {BsPatchCheckFill} from 'react-icons/bs'

const Success = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
  <>
    <div className="flex justify-start py-2 px-4">
    <Image
          src={"/logo.svg"}
          alt={"logo"}
          width={56}
          height={56}
          className={"cursor-pointer object-contain"}
        />
    </div>
    <div className='h-[80vh] flex flex-col justify-center items-center'>
        <BsPatchCheckFill className="w-20 h-20 text-emerald-500"/>
        <h1 className='text-2xl md:text-5xl mt-3 text-shadow-md'>Success Subscription</h1>
        <Link href={'/'}>
            <button disabled={isLoading} 
            onClick={() => setIsLoading(true)}
            className='mt-5 px-6 rounded bg-emerald-500 hover:bg-emerald-400 hover:text-gray-600 hover:text-shadow-md  transition translate-x-3 duration-200  py-3'>{isLoading ? 'waiting...' : 'Dashbord'}</button>
        </Link>
    </div>
  </>
  )
}

export default Success