import { Link } from "react-router-dom"
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { useState } from "react";
const Links = [
  {
    path: "/trending",
    text: "TRENDING",
  },
  {
    path: "/",
    text: "HOME",
  },
  {
    path: "/my-blogs",
    text: "BLOGS",
  },
  {
    path: "/about",
    text: "ABOUT",
  },
  {
    path: "/contact",
    text: "CONTACT",
  },
]



const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    const name = e.target.dataset.name;
    name == "show" ? setShow(true) : setShow(false);
  }
  return (
    <div>
      <div className="flex justify-between px-10 items-center h-28 w-full xl:px-52 lg:px-32 md:px-20 sm:px-10">
        <div >
          <h1 className="text-4xl font-cinzel-decorative hover:text-sky-400">
            <Link to="/">TOUR</Link>
          </h1>
        </div>

        {/* Larger screen navigation */}
        <div className="hidden xl:gap-16 lg:flex lg:gap-10 md:flex md:gap-6 items-center sm:hidden ">
          {Links.map(link => (
            <Link
              to={link.path}
              key={link.path}
              className={`text-lg py-[42px] font-semibold border-transparent border-b-2 
              ${link.text === "TRENDING" ? 'hover:text-red-400 hover:border-red-400' : 'hover:text-sky-400 hover:border-sky-400'}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
        {/* Mobile navigation*/}
        <div className="md:hidden sm:inline-block">
          {
            show
              ?
              <CloseTwoToneIcon className="cursor-pointer" data-name="close" fontSize="large" onClick={(e) => handleClick(e)} />
              :
              <MenuTwoToneIcon className="cursor-pointer" data-name="show" fontSize="large" onClick={(e) => handleClick(e)} />
          }
          <div className="flex flex-col absolute right-0 top-28 z-10 bg-white drop-shadow-md rounded-lg overflow-hidden">
            {
              show
              &&
              Links.map(link => (
                <Link
                  to={link.path}
                  key={link.path}
                  className={`text-lg py-4 px-10 font-lora font-semibold border-transparent border-b-2 text-center
              ${link.text === "TRENDING" ? 'hover:text-red-400 hover:border-red-400' : 'hover:text-sky-400 hover:border-sky-400'}`}
                >
                  {link.text}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <hr className="drop-shadow-lg" />
      {/* <div className="mx-auto h-[1px] rounded-sm bg-black opacity-30"> </div> */}
    </div>
  )
}

export default Navbar