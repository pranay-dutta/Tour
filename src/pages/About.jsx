import { Footer, Navbar } from "../components/ComponentExport"
const styles = {
  container: "container mx-auto px-5",
  heading: "text-center mt-20 text-3xl font-semibold",
  paragraph: "mt-5 font-semibold mt-10",
  headingContainer: "h-52 bg-blue-200 rounded flex flex-col justify-center mt-4 md:mt-20",

}
const About = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <div className={styles.container}>
          <div className={styles.headingContainer}>
            <div className="ml-5 md:ml-20">
              <p className="ml-2">Version 1.0 | April 7, 2024 </p>
              <h1 className="font-sans text-5xl sm:text-7xl lg:text-9xl">READ ME</h1>
            </div>
          </div>
          <p className={styles.paragraph}>
            Tour is a cutting-edge web application revolutionizing the way users engage with travel blogs. Seamlessly blending captivating content with intuitive functionality, Tour offers an immersive online experience for travel enthusiasts. Through its sleek interface, users can explore an extensive array of blog posts spanning diverse destinations, insider tips, and personal narratives from globetrotters worldwide. With robust search capabilities and user-friendly navigation, Tour ensures effortless discovery of inspiring travel stories and practical advice. By fostering a vibrant community of passionate travelers and storytellers, Tour transcends geographical boundaries, empowering users to embark on virtual journeys and connect with like-minded adventurers across the globe.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About