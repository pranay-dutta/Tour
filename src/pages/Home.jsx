import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <div id="page1" className="h-screen">
        <Navbar />
        <Hero />
      </div>
      {/* <div id="page2" className="h-screen">
        <Navbar />
        <Hero />
      </div> */}

    </>
  )
}

export default Home