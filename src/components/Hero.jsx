const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-8 mt-8">
        <img src="tour.png" alt="artificial-intelligence" className="rounded w-10/12 sm:w-7/12 md:w-10/12 lg:w-5/12 drop-shadow-lg" />
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-2xl md:text-center text-left font-semibold w-9/12">Exploring Horizons: A Journey Through the World - The Tour</h1>
        <p className="text-sm text-left lg:text-center lg:w-5/12 w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus quos nulla quibusdam nihil nesciunt vitae velit dolor repellat exercitationem maxime, esse perferendis laudantium magnam dicta, soluta molestiae voluptas nam!</p>
      </div>
      <div className="lg:w-3/12 w-8/12 mx-auto mt-6 h-[1px] rounded-sm bg-black"> </div>
    </div>
  )
}

export default Hero