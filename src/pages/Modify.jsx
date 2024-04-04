import supabase from "../config/supabaseClient"
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

// Tailwind styles
const customStyles = {
  input: "w-full mb-5 p-2 border border-[#ddd] border-solid text-base outline-none duration-300 rounded focus:border-blue-400",
  link: "no-underline py-2 px-10 text-xl border-none rounded transition duration-300 bg-blue-700 hover:bg-blue-500 text-white block mx-auto mb-5"
}

const Modify = () => {
  const [post, setPost] = useState(null);
  const params = useParams(); // Access the ID parameter from the URL
  const navigate = useNavigate();

  /* fetching a particular post */
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!params.id) { return } // new blog
        const result = await supabase.from('posts').select('*').eq("id", params.id).single();
        setPost(result.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPost();
  }, [params.id])

  const handelUpdate = async () => {
    try {
      const date = new Date();
      const dateString = date.toISOString().slice(0, 19) + "+00:00"
      /* same as the date string in the same format as Supabase's timestamptz date type */
      const { error, status } = await supabase
        .from('posts')
        .update({
          title: post.title,
          content: post.content,
          author: post.author,
          created_at: dateString,
        })
        .eq('id', params.id);

      if (error) {
        throw error;
      }
      console.log('Post updated successfully:', status);
      navigate('/my-blogs?message=Post updated successfully');
      // Navigate back to '/my-blogs' after successful update
    } catch (error) {
      console.error('Error updating post');
    }
  }

  /* changing input values state */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value     //change according to name 
    }));

  }

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="container mx-auto bg-slate-100 shadow-md rounded p-5 mt-12">
        {
          post ?
            /* This form is to edit existing blog */
            <form
              id="editForm"
              onSubmit={(e) => {
                e.preventDefault();
                handelUpdate();
              }}
              className="gap-3 items-center justify-center mx-5 "
            >
              <input
                className={customStyles.input}
                type="text"
                name="title"
                defaultValue={post.title}
                onChange={(e) => { handleChange(e) }}
              />
              <textarea
                className={customStyles.input}
                name="content"
                defaultValue={post.content}
                onChange={(e) => { handleChange(e) }}
                rows="10"
              >
              </textarea>
              <input
                className={customStyles.input}
                type="text"
                name="author"
                defaultValue={post.author}
                onChange={(e) => { handleChange(e) }}
              />
              <button className={customStyles.link} type="submit">Update</button>
            </form>
            :
            <h1>No post found to update</h1>
        }
      </div>
    </div>
  );
}

export default Modify