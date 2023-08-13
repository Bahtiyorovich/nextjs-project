import Image from "next/image";
import {useState, useEffect, useContext} from 'react'
import {BiBellMinus} from 'react-icons/bi'
import {AiOutlineSetting, AiOutlineSearch, AiOutlineUser, AiOutlineLogout} from 'react-icons/ai'
import Link from "next/link";
import { AuthContext } from 'src/context/auth.context';
import NavMenu from "../nav-menu/navMenu";
import { Tooltip } from "@mui/material";

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

      <NavMenu/>

        <ul className="space-x-10 md:flex hidden">
          <li>
          <Tooltip title="Home">
            <Image
              src={"/home.svg"}
              alt={"logo"}
              width={20}
              height={20}
              className='navlink'
            />
          </Tooltip>
          </li>
          <li>
            <Tooltip title="Movies">
              <Image
                src={"/movie.svg"}
                alt={"logo"}
                width={20}
                height={20}
                className='navlink'
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="TV Show">
              <Image
                src={"/tv.svg"}
                alt={"logo"}
                width={20}
                height={20}
                className='navlink'
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="News">
              <Image
                src={"/stroke.svg"}
                alt={"logo"}
                width={20}
                height={20}
                className='navlink'
              />
            </Tooltip>
          </li>
        </ul>
      </div>

      <div className='flex space-x-6 lg:space-x-10 cursor-pointer'>
        <Tooltip title="search" placement="top">
          <div>
            <AiOutlineSearch className='w-6 h-6 cursor-pointer'/> 
          </div>
        </Tooltip>
        <p className='hidden lg:inline'>Kids</p>
        <Tooltip title="user account">
          <Link href={'/account'}>
              <AiOutlineUser className='w-6 h-6 cursor-pointer'/>
          </Link>
        </Tooltip>
        <Tooltip title="message">
          <div>
            <BiBellMinus className='w-6 h-6 cursor-pointer'/>
          </div>
        </Tooltip>
        <Tooltip title="settings">
          <div>
            <AiOutlineSetting className='w-6 h-6 cursor-pointer'/>
          </div>
        </Tooltip>
        <Tooltip title="Logout">
          <div>
            <AiOutlineLogout  className='w-6 h-6 cursor-pointer' onClick={logOut}/>
          </div>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
