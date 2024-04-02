import PropTypes from "prop-types"
import supabase from "../config/supabaseClient"
import { useParams, useLocation, useNavigation } from 'react-router-dom';
import { useEffect, useState } from "react";

const Modify = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  // console.log(params);
  // console.log(loc.pathname);
  const params = useParams(); // Access the ID parameter from the URL
  // const loc = useLocation()
  // const navigation = useNavigation();  
  // navigation("/my-blogs")
  // Use the ID parameter as needed

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase.from('posts').select('*').eq("id", params.id).single();
      if (data) {
        setPost(data);
        setError(null);
        console.log(data);
      }
      if (error) {
        setError(error);
      }
    }
    fetchPost();

  }, [params.id])


  return (
    <div>
      <form action="/posts/:id" method="POST">
        <h1>This is modify form</h1>

      </form>
      {/* Other component content */}
    </div>
  );
};

Modify.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  created_at: PropTypes.string,
  author: PropTypes.string,
}

export default Modify