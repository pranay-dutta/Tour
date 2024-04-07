import { Hero, Navbar, Footer } from "../components/ComponentExport"

const Home = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  )
}

export default Home