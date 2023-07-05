import Image from "next/image";
import {useState, useEffect, useContext} from 'react'
import {BiBellMinus} from 'react-icons/bi'
import {AiOutlineSetting, AiOutlineSearch, AiOutlineUser, AiOutlineLogout} from 'react-icons/ai'
import Link from "next/link";
import { AuthContext } from 'src/context/auth.context';

const Header = () => {

    const [scrolled,  setScrolled] = useState(false)

    const { logOut } = useContext(AuthContext)


    useEffect(() => {
        const handleScrolled = () => {
            if(window.scrollY > 0){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScrolled)

        return () => window.removeEventListener('scroll', handleScrolled)

    }, [])

  return (
    <header className={`${scrolled && 'bg-black/60 shadow-lg' }`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={"/logo.svg"}
          alt={"logo"}
          width={56}
          height={56}
          className={"cursor-pointer object-contain"}
        />
        <ul className="space-x-10 md:flex hidden">
          <li>
            <Image
              src={"/home.svg"}
              alt={"logo"}
              width={20}
              height={20}
              className='navlink'
            />
          </li>
          <li>
            <Image
              src={"/movie.svg"}
              alt={"logo"}
              width={20}
              height={20}
              className='navlink'
            />
          </li>
          <li>
            <Image
              src={"/tv.svg"}
              alt={"logo"}
              width={20}
              height={20}
              className='navlink'
            />
          </li>
          <li>
            <Image
              src={"/stroke.svg"}
              alt={"logo"}
              width={20}
              height={20}
              className='navlink'
            />
          </li>
        </ul>
      </div>

      <div className='flex space-x-6 lg:space-x-10 cursor-pointer'>
        <AiOutlineSearch className='w-6 h-6 cursor-pointer'/>
        <p className='hidden lg:inline'>Kids</p>
        <Link href={'/account'}>
            <AiOutlineUser className='w-6 h-6 cursor-pointer'/>
        </Link>
        <BiBellMinus className='w-6 h-6 cursor-pointer'/>
        <AiOutlineSetting className='w-6 h-6 cursor-pointer'/>
        <AiOutlineLogout  className='w-6 h-6 cursor-pointer' onClick={logOut}/>
      </div>
    </header>
  );
};

export default Header;
