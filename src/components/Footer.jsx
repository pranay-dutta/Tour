import { Link } from "react-router-dom"

const links = [
  {
    path: "/facebook",
    text: "Facebook",
  },
  {
    path: "/instagram",
    text: "Instagram",
  },
  {
    path: "/linkedin",
    text: "Linkedin",
  }
]
const date = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="w-[100%] text-center mt-5 bg-black text-white pb-8 pt-12 px-5 bottom-0">
      <h1 className="mb-6 font-cinzel-decorative text-4xl">TOUR</h1>
      <p className="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, Lorem ipsum dolor</p>
      <div className="inline-flex gap-4 mx-auto mb-12">
        {links && links.map((link, id) => (
          <Link
            key={id}
            to={link.path}
          >
            {link.text}
          </Link>
        ))
        }
      </div>
      <p className="text-sm">&copy; {date} Tour Co. <br /> All rights reserved</p>
    </div >
  )
}

export default Footer