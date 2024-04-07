const styles = {
  main: "flex flex-col items-center gap-8 mt-8",
  image: "rounded w-10/12 sm:w-7/12 md:w-10/12 lg:w-5/12 drop-shadow-lg",
  heading: "lg:text-3xl md:text-2xl sm:text-xl text-2xl md:text-center text-left font-semibold w-9/12",
  paragraph: "text-sm text-left lg:text-center lg:w-5/12 w-9/12",
  line: "lg:w-3/12 w-8/12 mx-auto mt-6 h-[1px] rounded-sm bg-black",


}
const Hero = () => {
  return (
    <div>
      <div className={styles.main}>
        <img src="tour.png" alt="artificial-intelligence" className={styles.image} />
        <h1 className={styles.heading}>Exploring Horizons: A Journey Through the World</h1>
        <p className={styles.paragraph}>
          Discover captivating stories, expert insights, and practical advice on our blog website. From travel tips to personal anecdotes, delve into a diverse array of topics that inform, inspire, and entertain. Join our community and embark on a journey of discovery and exploration, right from your screen.
        </p>
      </div>
      <div className={styles.line}> </div>
    </div>
  )
}

export default Hero