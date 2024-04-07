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
const styles = {
  main: "w-[100%] text-center mt-5 bg-black text-white pb-8 pt-12 px-5 bottom-0",
  heading: "mb-6 font-cinzel-decorative text-4xl",
  link: "hover:text-slate-500 hover:underline underline-offset-4",
  linksContainer: "inline-flex gap-4 mx-auto mb-12",
}
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>TOUR</h1>
      <p className="mb-6">
        Tour: Inspiring journeys, captivating stories. Explore the world with us..</p>
      <div className={styles.linksContainer}>
        {links && links.map((link, id) => (
          <Link
            className={styles.link}
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