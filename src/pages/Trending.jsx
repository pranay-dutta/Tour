import axios from "axios"
import { useEffect, useState } from "react"
import { News, Navbar, Footer } from "../components/ComponentExport";


const Trending = () => {
  const [results, setResults] = useState(null);
  const [status, setStatus] = useState(null);
  const API_URL = import.meta.env.VITE_NEWS_API_URL;
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const styles = {
    heading: "text-3xl text-center font-semibold mb-2 mt-12",
    line: "w-1/2 drop-shadow-2xl mx-auto bg-black h-[1px] mb-10",
    newsContainer: "2xl:grid xl:grid flex flex-col grid-cols-2 gap-10 xl:w-8/12 lg:w-10/12 md:w-12/12 md:gap-4 mx-auto sm:grid items-center justify-items-center"
  }

  /* fetching all the news from the API */
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, status } = await axios.get(`${API_URL}top-headlines?country=in&apiKey=${API_KEY}`);
        setResults(data.articles);
        setStatus(status);
      } catch (error) {
        setResults(null)

      }
    };

    fetchNews();
  }, [API_KEY, API_URL]);


  return (
    <div>
      <div className="pb-12">
        <Navbar />
        <h1 className={styles.heading}>TRENDING NEWS</h1>
        <div className={styles.line}> </div>
        <div className={styles.newsContainer}>

          {results ? results
            /* filter out articles that have required fields */
            .filter(result =>
              result.content !== null &&
              result.title !== null &&
              result.author !== null &&
              result.urlToImage !== null
            )
            .map((result, idx) => (
              <News
                key={idx}
                altname={result.title}
                imgsrc={result.urlToImage}
                title={result.title}
              />
            ))
            :
            <h1 className={styles.heading}>Loading...</h1>
          }
        </div>
        <p className="text-2xl text-center text-red-700">{ status > 400 && "Sorry this a free API. It doesn't takes https requests🥲"}</p>
      </div>
      <Footer />
    </div>
  );

}

export default Trending