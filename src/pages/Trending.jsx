import axios from "axios"
import { useEffect, useState } from "react"
import { Blog, Navbar } from "../components/ComponentExport";


const Trending = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_NEWS_API_URL;
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;


  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await axios.get(`${API_URL}top-headlines?country=in&apiKey=${API_KEY}`);
      if (data) {
        setResults(data.articles);
        setError(null);
        console.log(data);
      }
      if (error) {
        setError(error);
        setResults(null)
      }
    };

    fetchNews();
  }, [API_KEY, API_URL]);


  return (
    <div>
      <Navbar />
      <div
        className="
          2xl:grid xl:grid flex flex-col grid-cols-2 gap-10 
          xl:w-8/12 lg:w-10/12 md:w-12/12 md:gap-4 mx-auto mt-7
          sm:grid 
          items-center justify-items-center
        "
      >
        {results && results
          .filter(result =>
            result.content !== null &&
            result.title !== null &&
            result.author !== null &&
            result.urlToImage !== null
          )
          .map((result, idx) => (
            <Blog
              key={idx}
              altname={result.title}
              imgsrc={result.urlToImage}
              title={result.title}
            />
          ))}
      </div>
      <p>{error && error}</p>
    </div>
  );

}

export default Trending