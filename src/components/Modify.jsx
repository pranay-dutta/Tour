import supabase from "../config/supabaseClient"
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Modify = () => {
  const [post, setPost] = useState(null);
  const customStyles = {
    input: "w-full mb-5 p-2 border border-[#ddd] border-solid text-base outline-none duration-300 rounded focus:border-blue-400",
    link: "no-underline py-2 px-10 text-xl border-none rounded transition duration-300 bg-blue-700 hover:bg-blue-500 text-white block mx-auto mb-5"
  }

  // console.log(params);
  // console.log(loc.pathname);
  const params = useParams(); // Access the ID parameter from the URL
  // const loc = useLocation()
  const navigate = useNavigate();
  // navigation("/my-blogs")
  // Use the ID parameter as needed

  /* fetching a particular post */
  useEffect(() => {
    const fetchPost = async () => {
      try {
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
      //The part "+00:00" represents the UTC (Coordinated Universal Time) offset.
      // same as the date string in the same format as Supabase's timestamptz date type
      const dateString = date.toISOString().slice(0, 19) + "+00:00"
      const result = await supabase
        .from('posts')
        .update({
          title: post.title,
          content: post.content,
          author: post.author,
          created_at: dateString,
        })
        .eq('id', params.id);

      // if (error) {
      //   throw error;
      // }
      console.log('Post updated successfully:', result);
      // Navigate back to '/my-blogs' after successful update
      navigate('/my-blogs');
    } catch (error) {
      console.error('Error updating post:', error.message);
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
        {post ?
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
              id="content"
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
          <form
            id="editForm"
            action=""
            method="POST"
            className="gap-3 items-center justify-center mx-5"
          >
            <input
              className={customStyles.input}
              type="text"
              name="title"
              onChange={(e) => { handleChange(e) }}
              placeholder="Enter a title"
            />
            <textarea
              className={customStyles.input}
              id="content"
              onChange={(e) => { handleChange(e) }}
              rows="10"
              placeholder="Enter content"
            >
            </textarea>
            <input
              className={customStyles.input}
              type="text"
              name="author"
              onChange={(e) => { handleChange(e) }}
              placeholder="Author"
            />
            <button className={customStyles.link} type="submit">Update</button>
          </form>
        }
      </div>
    </div>
  );
}

export default Modify