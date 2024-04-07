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
  // {
  //   path: "/contact",
  //   text: "CONTACT",
  // },
]
const customStyles = {
  heading: "text-4xl font-cinzel-decorative font-medium hover:text-sky-400",
  mainDiv: "flex justify-between px-10 items-center h-28 w-full xl:px-52 lg:px-32 md:px-20 sm:px-10",
  lgScrnContainer: "hidden xl:gap-16 lg:flex lg:gap-10 md:flex md:gap-6 items-center sm:hidden",
  lgLinkText: "text-lg py-[42px] font-semibold border-transparent border-b-2",
  smScrnContainer: "md:hidden sm:inline-block",
  trendingLink: 'hover:text-red-400 hover:border-red-400',
  otherLinks: 'hover:text-sky-400 hover:border-sky-400',
  smLinkContainer: "flex flex-col absolute right-0 top-28 z-10 bg-white drop-shadow-md rounded-lg overflow-hidden",
  smLinkText: "text-lg py-3 border-b-[1px #00000001] border-dashed px-10 font-sans font-normal border-b text-center",
}

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    const name = e.target.dataset.name;
    name == "show" ? setShow(true) : setShow(false);
  }
  return (
    <div>
      <div className={customStyles.mainDiv}>
        <div >
          <h1 className={customStyles.heading}>
            <Link to="/">TOUR</Link>
          </h1>
        </div>

        {/* Larger screen navigation */}
        <div className={customStyles.lgScrnContainer}>
          {Links.map(link => (
            <Link
              to={link.path}
              key={link.path}
              className={`${customStyles.lgLinkText}
                ${link.text === "TRENDING"
                  ? customStyles.trendingLink
                  : customStyles.otherLinks}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
        {/* Mobile navigation*/}
        <div className={customStyles.smScrnContainer}>
          {/* Button to open close side menu*/}
          {
            show
              ?
              <CloseTwoToneIcon className="cursor-pointer" data-name="close" fontSize="large" onClick={(e) => handleClick(e)} />
              :
              <MenuTwoToneIcon className="cursor-pointer" data-name="show" fontSize="large" onClick={(e) => handleClick(e)} />
          }
          {/* Links Container of mobile */}
          <div className={customStyles.smLinkContainer}>
            {
              show
              &&
              Links.map(link => (
                <Link
                  to={link.path}
                  key={link.path}
                  className={`${customStyles.smLinkText}
                    ${link.text === "TRENDING"
                      ? customStyles.trendingLink
                      : customStyles.otherLinks}`}
                >
                  {link.text}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <hr className="drop-shadow-lg" />
    </div>
  )
}

export default Navbar