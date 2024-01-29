import '../index.css'
import { useState,useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
const Header = () => {
  const icon={ 
    fontSize:35,
    margin:18
  }


  const [nav, setnav] = useState(false)
  function open() {
        nav ? setnav(false):setnav(true)
  }
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  

  return (
    <header className={`md:flex md:justify-between bg-[#04151f] navbar ${visible ? '' : 'navbar--hidden'}`} >
      <div className='flex justify-center md:px-14'>
        <a className="hover:text-[#da4167]" href="https://www.linkedin.com/in/sarmad-irfan/" target="blank"><FaLinkedin style={icon}/></a>
        <a className="hover:text-[#da4167]" href="mailto:sarmadirfan78@gmail.com" target="blank"><MdOutlineMarkEmailUnread style={icon}/></a>
        <a className="hover:text-[#da4167]" href="https://github.com/sarmad0324" target="blank"> <FaGithub style={icon}/></a>
        <a className="hover:text-[#da4167]" href="https://www.facebook.com/sarmad.irfan.9" target="blank"><FaFacebook style={icon}/></a>
      </div>
       
      <div className={`${nav ? 'block ' : 'hidden md:flex md:items-center md:gap-10 md:pr-14'}  `}>
        <a href='#/'  className='font-semibold flex underline font-sans justify-center pt-4 hover:text-[#da4167]  md:pt-0 md:no-underline'>Home</a>
        <a href='#project'  className='font-semibold flex underline font-sans justify-center pt-4 hover:text-[#da4167]  md:pt-0 md:no-underline'>Projects</a>
        <a href='#contact'  className='font-semibold flex underline font-sans justify-center pt-4 hover:text-[#da4167] md:pt-0 md:no-underline'>Contact Me</a>
      </div>
     
      <div className='text-center md:hidden flex justify-center'>
        {nav ? <TiDeleteOutline onClick={open} className='hover:text-[#da4167] text-xl'/>  : <HiMiniBars3CenterLeft onClick={open} className='hover:text-[#da4167] text-xl'/> }
      </div>
      
    </header>

  )
}

export default Header
//<img alt='logo' src={require("../assets/logo1.png")}/>